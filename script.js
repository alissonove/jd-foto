:root{
  --verde:#4a5c3b; /* verde escuro do JB do logo */
  --verde-claro:#6b7d5a; /* tom do 4 */
  --bege:#f8f5ee; /* fundo do logo */
  --bege2:#fdfaf5;
  --escuro:#3a4a35;
  --borda:#e8e3d9;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter', sans-serif;background:var(--bege2);color:#333;line-height:1.5}
header{display:flex;justify-content:space-between;align-items:center;padding:18px 4%;background:var(--bege2);position:sticky;top:0;z-index:100;border-bottom:1px solid var(--borda)}
.logo-area{display:flex;align-items:center;gap:10px;font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--verde);font-weight:600}
.logo-mini{width:38px;height:38px;border-radius:50%;object-fit:cover}
nav{display:flex;align-items:center}
nav a{margin:0 10px;text-decoration:none;color:#333;font-size:12px;font-weight:700;letter-spacing:.5px}
.btn-agendar{background:var(--verde);color:#fff!important;padding:10px 18px;border-radius:8px}
.hero{display:grid;grid-template-columns:1.1fr.9fr;min-height:80vh;background:var(--bege)}
.hero-text{padding:60px 6%;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}
.logo-hero{width:170px;height:170px;border-radius:50%;object-fit:cover;margin-bottom:20px}
.hero-text h1{font-family:'Cormorant Garamond',serif;font-size:54px;color:var(--escuro);font-weight:300;line-height:1.05;margin-bottom:14px}
.hero-text p{color:#666;font-size:16px;margin-bottom:22px;max-width:500px}
.hero-btns{display:flex;gap:12px;justify-content:center;margin-bottom:18px;flex-wrap:wrap}
.btn{padding:14px 26px;border-radius:10px;text-decoration:none;font-weight:700;font-size:13px;display:inline-block;cursor:pointer}
.btn-primary{background:var(--verde);color:#fff}
.btn-outline{border:1.5px solid var(--verde);color:var(--verde);background:transparent}
.badges{font-size:11px;color:#888;letter-spacing:.5px}
.hero-img img{width:100%;height:100%;min-height:580px;object-fit:cover;display:block}
.portfolio{padding:50px 4%;text-align:center;background:var(--bege2)}
.portfolio h2{font-family:'Cormorant Garamond',serif;letter-spacing:3px;color:var(--verde);font-size:34px;margin-bottom:24px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1080px;margin:0 auto}
.grid img{width:100%;height:240px;object-fit:cover;border-radius:6px;transition:.3s}
.grid img:hover{transform:scale(1.02)}

/* CARROSSEL 6 FOTOS NA MESMA LINHA COM SETA */
.sessao-fotos{padding:60px 0;background:var(--bege);text-align:center;overflow:hidden}
.sessao-fotos h2{font-family:'Cormorant Garamond',serif;font-size:34px;color:var(--verde);letter-spacing:3px}
.sessao-fotos.sub{color:#777;font-size:13px;margin:6px 0 26px}
.carousel-wrapper{position:relative;max-width:100%;overflow:hidden}
.carousel-track{display:flex;gap:16px;transition:transform.6s cubic-bezier(.4,0,.2,1);padding:0 70px;will-change:transform}
.slide{min-width:320px;height:420px;position:relative;border-radius:12px;overflow:hidden;flex-shrink:0;background:#ddd}
.slide img{width:100%;height:100%;object-fit:cover}
.slide span{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(0,0,0,.65));color:#fff;padding:20px 14px;font-size:13px;text-align:left;font-weight:600}
.arrow{position:absolute;top:50%;transform:translateY(-50%);background:var(--verde);color:#fff;border:none;width:46px;height:46px;border-radius:50%;font-size:30px;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.15)}
.arrow.left{left:14px}.arrow.right{right:14px}
.arrow:hover{background:var(--escuro)}
.dots{display:flex;gap:8px;justify-content:center;margin-top:18px}
.dots span{width:8px;height:8px;border-radius:50%;background:#d6d0c3;cursor:pointer;transition:.3s}
.dots span.active{background:var(--verde);width:22px}

/* GALERIAS COM 6 FOTOS */
.galeria{padding:70px 4%;text-align:center}
.galeria h2{font-family:'Cormorant Garamond',serif;font-size:30px;color:var(--verde);letter-spacing:2px}
.galeria p{font-size:13px;color:#777;margin:8px 0 28px}
.grid-6{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1100px;margin:0 auto}
.grid-6 img{width:100%;height:340px;object-fit:cover;border-radius:12px;transition:transform.4s, box-shadow.4s}
.grid-6 img:hover{transform:scale(1.03);box-shadow:0 8px 24px rgba(0,0,0,.12)}
.bg-bege{background:var(--bege)}

.sobre{background:var(--verde);color:#f0ebe0;padding:60px 6%;text-align:center}
.sobre h2{font-family:'Cormorant Garamond',serif;font-size:32px;margin-bottom:12px}
.sobre p{max-width:760px;margin:0 auto 22px;line-height:1.7}
.icons{display:flex;gap:30px;justify-content:center;flex-wrap:wrap;font-size:14px}
footer{background:var(--escuro);color:#c9cbbf;padding:16px 4%;display:flex;justify-content:space-between;font-size:11px;flex-wrap:wrap;gap:8px}

@media(max-width:900px){.hero{grid-template-columns:1fr}.hero-img img{min-height:420px}.grid{grid-template-columns:1fr 1fr}.carousel-track{padding:0 24px}.slide{min-width:260px;height:360px}}
@media(max-width:600px){.grid,.grid-6{grid-template-columns:1fr}.grid-6 img{height:300px}header{flex-direction:column;gap:12px}nav a{margin:0 6px;font-size:11px}}
