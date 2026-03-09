*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
body{
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
margin:0;
color:white;

background:
radial-gradient(circle at 20% 30%, #1f1f1f, transparent 40%),
radial-gradient(circle at 80% 70%, #2b2b2b, transparent 40%),
#0a0a0a;

min-height:100vh;
}
}
@keyframes bgAnimation {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
}
h1{
    text-align: center;
    margin: 100px auto 50px;
    font-weight: 600;
}
form {
    width: 90%;
    max-width: 600px;
    margin: auto;
    height: 80px;
    background: rgba(0, 0, 0, 0.6);  /* Glassmorphism effect */
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 10px;
    border-radius: 12px;  /* Soft rounded edges */
    display: flex;
    align-items: center;
}
form input{
    flex: 1;
    height: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #fff;
    font-size: 18px;
    padding: 0 30px;
}
form button{
    padding: 0 40px;
    height: 100%;
    background: #3f3e3e;
    color: #fff;
    font-size: 18px;
    border: 0;
    outline: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
}
::placeholder{
    color: #fff;
    font-size: 18px;
}
#show-more-btn{
display:none;
margin:40px auto;
padding:12px 24px;
border:none;
border-radius:25px;
background:white;
color:black;
cursor:pointer;
}#search-result{
    width: 80%;
    margin: 100px auto 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
}
#search-result img{
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 5px;
    
}
#search-result img:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
    box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
}
#search-result img {
    opacity: 0;
    transform: scale(0.95);
    animation: fadeIn 0.5s ease-in forwards;
}
@keyframes fadeIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}
box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1);
*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
background:#0f0f0f;
color:white;
}

.hero{
height:70vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
}

.hero h1{
font-size:64px;
font-weight:600;
letter-spacing:-1px;
margin-bottom:10px;
}

.hero p{
font-size:20px;
color:#aaa;
margin-bottom:30px;
}

#search-form{
display:flex;
gap:10px;
}

#search-box{
padding:15px 20px;
width:350px;
border-radius:30px;
border:none;
outline:none;
font-size:16px;
}

#search-form button{
padding:15px 25px;
border:none;
border-radius:30px;
background:white;
color:black;
font-weight:600;
cursor:pointer;
transition:0.3s;
}

#search-form button:hover{
transform:scale(1.05);
}

#search-result{
width:90%;
margin:40px auto;
display:grid;
grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
gap:20px;
}
#search-result img{
width:100%;
border-radius:16px;
transition:0.4s;
}

#search-result img:hover{
transform:scale(1.03);
}

#show-more-btn{
display:block;
margin:40px auto;
padding:14px 28px;
border-radius:30px;
border:none;
font-size:16px;
background:white;
color:black;
cursor:pointer;
}

html{
scroll-behavior:smooth;
}

*{
transition:all 0.25s ease;
}

.fade-in{
opacity:0;
transform:translateY(40px);
transition:0.8s ease;
}

.fade-in.show{
opacity:1;
transform:translateY(0);
}

.image-card{
overflow:hidden;
border-radius:18px;
position:relative;
}

.image-card img{
width:100%;
display:block;
transition:0.5s;
}

.image-card:hover img{
transform:scale(1.08);
}

.image-card::after{
content:"View";
position:absolute;
bottom:15px;
right:15px;

background:rgba(0,0,0,0.6);
padding:6px 12px;
border-radius:10px;
font-size:12px;

opacity:0;
transition:0.3s;
}

.image-card:hover::after{
opacity:1;
}

.hero{
position:relative;
height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
overflow:hidden;
}

.hero-bg{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

background-image:
linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
url("https://images.unsplash.com/photo-1501785888041-af3ef285b470");

background-size:cover;
background-position:center;
background-repeat:no-repeat;

z-index:-1;
}

.hero-content{
max-width:800px;
padding:20px;
}

.hero-content{
color:white;
}

.hero-content h1{
font-size:64px;
font-weight:600;
margin-bottom:15px;
letter-spacing:-1px;
color:white;
}

.hero-content p{
font-size:20px;
margin-bottom:30px;
color:rgba(255,255,255,0.85);
}

#search-form{
display:flex;
justify-content:center;
gap:10px;
}

#search-box{
padding:15px 20px;
width:350px;
border-radius:30px;
border:none;
outline:none;
font-size:16px;
}

#search-form button{
padding:15px 25px;
border:none;
border-radius:30px;
background:white;
color:black;
font-weight:600;
cursor:pointer;
transition:0.3s;
}

#search-form button:hover{
transform:scale(1.05);
}

.nav-search{
display:flex;
align-items:center;
gap:8px;
}

.nav-search input{
width:200px;
padding:10px 16px;

border-radius:20px;
border:none;
outline:none;

background:rgba(255,255,255,0.12);
color:white;

backdrop-filter: blur(10px);

transition:0.25s;
}
.nav-search input:focus{
background:rgba(255,255,255,0.18);
color:white;
}
.nav-search input::placeholder{
color:rgba(255,255,255,0.7);
}

.nav-search button{
padding:10px 18px;

border-radius:20px;
border:none;

background:white;
color:black;

font-weight:500;
cursor:pointer;
}

#show-more-btn{
display:none;
}

section{
margin:0;
padding:0;
}

.hero{
margin-bottom:0;
padding-bottom:0;
}
#search-result:empty{
display:none;
}

.glass-title-bar{
position:fixed;
top:0;
left:0;

width:100%;
height:55px;

display:flex;
align-items:center;
justify-content:center;

background:rgba(255,255,255,0.08);
backdrop-filter: blur(12px);

border-bottom:1px solid rgba(255,255,255,0.15);

z-index:2000;
}

.glass-title-bar h2{
color:white;
font-weight:600;
letter-spacing:1px;
font-size:20px;
margin:0;
}
