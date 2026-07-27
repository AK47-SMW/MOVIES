const DATA_INDEX='data/movies.json';
async function getMovies(){const r=await fetch(DATA_INDEX);if(!r.ok)throw new Error('Movie index failed');return r.json()}
function movieUrl(id){return `movie.html?id=${encodeURIComponent(id)}`}
function imgPath(movie,name){return `assets/images/${movie.id}/${name||''}`}
function card(movie){const genre=(movie.genre||[]).join(', ');return `<article class="card"><a href="${movieUrl(movie.id)}"><img class="poster" src="${imgPath(movie,movie.poster)}" alt="${movie.title} poster" loading="lazy" width="300" height="450"><div class="card-body"><h3>${movie.title}</h3><div class="meta"><span>${movie.year}</span><span>${genre}</span><span>${movie.size}</span><span class="badge">${movie.quality}</span></div></div></a></article>`}
function matches(movie,q){const hay=[movie.title,movie.year,movie.language,movie.quality,movie.size,...(movie.genre||[])].join(' ').toLowerCase();return hay.includes(q.trim().toLowerCase())}
function byUpload(a,b){return new Date(b.uploadedDate||0)-new Date(a.uploadedDate||0)}
function byPopular(a,b){return (b.popularScore||0)-(a.popularScore||0)}
function setMeta(movie){document.title=`${movie.title} (${movie.year}) - FlickHide`;const desc=`Download ${movie.title} in ${movie.quality}. ${movie.description}`.slice(0,155);upsert('meta[name="description"]','content',desc);upsert('meta[property="og:title"]','content',document.title);upsert('meta[property="og:description"]','content',desc);upsert('meta[name="twitter:card"]','content','summary_large_image');upsert('link[rel="canonical"]','href',location.href.split('#')[0])}
function upsert(selector,attr,value){const el=document.querySelector(selector);if(el)el.setAttribute(attr,value)}
