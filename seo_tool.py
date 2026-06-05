import os
import re
from urllib.parse import quote
from datetime import datetime

DOMAIN = "https://surgicalinsighthub.app"
DEFAULT_IMAGE = "/assets/images/Surgical_Insight_Hub_Logo.png"

def generate_sitemap(urls):
    sitemap_path = "sitemap.xml"
    content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    # Sort URLs for consistent output
    urls.sort()
    
    # Priority rules
    for url in urls:
        priority = "0.5"
        changefreq = "weekly"
        
        if url == DOMAIN or url == DOMAIN + "/":
            priority = "1.0"
            changefreq = "daily"
        elif "/notes/" in url or "arena.html" in url:
            priority = "0.8"
        elif "/blog/" in url:
            priority = "0.7"
            
        content += f"  <url>\n"
        content += f"    <loc>{url}</loc>\n"
        content += f"    <changefreq>{changefreq}</changefreq>\n"
        content += f"    <priority>{priority}</priority>\n"
        content += f"  </url>\n"
        
    content += '</urlset>\n'
    
    with open(sitemap_path, "w") as f:
        f.write(content)
    print(f"Generated {sitemap_path} with {len(urls)} URLs")

def generate_robots():
    robots_path = "robots.txt"
    content = f"User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n"
    with open(robots_path, "w") as f:
        f.write(content)
    print(f"Generated {robots_path}")

def escape_attr(text):
    return text.replace('"', '&quot;').replace('<', '&lt;').replace('>', '&gt;')

def process_seo():
    sitemap_urls = []
    
    for root, dirs, files in os.walk('.'):
        if any(ignored in root for ignored in ['node_modules', '.git', 'archive', 'scratch']): 
            continue
            
        for f in files:
            if not f.endswith('.html'):
                continue
                
            filepath = os.path.join(root, f)
            rel_path = os.path.relpath(filepath, '.')
            
            # Skip components or fragments if there are any (heuristic)
            if 'header.html' in f or 'template' in f.lower() or 'nav' in f:
                continue

            # url encoding for spaces in folders
            # split by slash, quote each part, join back
            path_parts = rel_path.split(os.sep)
            # if index.html, root is just DOMAIN/
            url_path = "/".join(quote(part) for part in path_parts)
            
            # Canonical URL logic (clean index.html)
            if url_path == "index.html":
                page_url = f"{DOMAIN}"
            else:
                page_url = f"{DOMAIN}/{url_path}"
                
            sitemap_urls.append(page_url)
            
            with open(filepath, 'r') as file:
                content = file.read()
                
            # Extract title
            title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
            page_title = "Surgical Insight Hub"
            if title_match:
                page_title = title_match.group(1).strip()
                
            # Extract description if exists, else generic
            desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']\s*/?>', content, re.IGNORECASE)
            if desc_match:
                page_description = desc_match.group(1).strip()
            else:
                page_description = "High-yield surgical education and cognitive task analysis for major procedures. Built for the modern surgical resident."
                if "Surgical Operative Approach" in filepath:
                    page_description = f"Operative framework and step-by-step cognitive task analysis for {page_title.replace(' — SIH', '')}."
                elif "blog" in filepath:
                    page_description = f"Surgical Insight Hub Blog: {page_title.replace(' — SIH', '')}"

            # Prepare SEO block
            seo_block = f"""
    <!-- SEO Meta Tags -->
    <meta name="description" content="{escape_attr(page_description)}">
    <meta name="keywords" content="surgery, surgical resident, operative playbook, medical education, MRCS, ABSITE, FRCS, surgical anatomy, MCQ arena">
    <link rel="canonical" href="{page_url}">
    
    <!-- Open Graph / Social -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{page_url}">
    <meta property="og:title" content="{escape_attr(page_title)}">
    <meta property="og:description" content="{escape_attr(page_description)}">
    <meta property="og:image" content="{DOMAIN}{DEFAULT_IMAGE}">
"""

            # Clean out old SEO tags if we've added them before to avoid duplicates
            content = re.sub(r'<!-- SEO Meta Tags -->.*?<!-- Open Graph / Social -->.*?(?=</head>)', '', content, flags=re.IGNORECASE | re.DOTALL)
            # Clean existing canonicals, og tags, and descriptions to prevent conflicts
            content = re.sub(r'<meta\s+name=["\']description["\'][^>]*>\s*', '', content, flags=re.IGNORECASE)
            content = re.sub(r'<meta\s+name=["\']keywords["\'][^>]*>\s*', '', content, flags=re.IGNORECASE)
            content = re.sub(r'<link\s+rel=["\']canonical["\'][^>]*>\s*', '', content, flags=re.IGNORECASE)
            content = re.sub(r'<meta\s+property=["\']og:[^>]*>\s*', '', content, flags=re.IGNORECASE)

            # Insert before </head>
            new_content = re.sub(r'</head>', f'{seo_block}</head>', content, flags=re.IGNORECASE)
            
            if new_content != content:
                with open(filepath, 'w') as file:
                    file.write(new_content)
                print(f"Updated SEO tags in: {filepath}")

    generate_sitemap(sitemap_urls)
    generate_robots()

if __name__ == "__main__":
    process_seo()
