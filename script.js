* {
    box-sizing: border-box;
    font-family: Inter, Arial, sans-serif;
}


body {

    margin:0;
    background:#08090d;
    color:white;

}


nav {

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:25px 8%;

}


.logo {

    font-size:25px;
    font-weight:800;

}


.links a {

    color:#aaa;
    text-decoration:none;
    margin-left:30px;

}


.links a:hover {

    color:white;

}



.hero {

    min-height:80vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;

}


.hero h1 {

    font-size:70px;
    line-height:1.1;

}


.hero p {

    color:#aaa;
    font-size:20px;
    max-width:600px;

}


.buttons {

    margin-top:40px;

}


.buttons a {

    padding:15px 35px;
    border-radius:12px;
    text-decoration:none;
    margin:10px;
    display:inline-block;

}


.primary {

    background:#5865f2;
    color:white;

}


.secondary {

    border:1px solid #333;
    color:white;

}



section {

    padding:80px 8%;

}


h2 {

    text-align:center;
    font-size:45px;

}



.cards {

    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
    gap:25px;

}


.card {

    background:#11131a;
    border:1px solid #20232d;
    padding:30px;
    border-radius:20px;
    transition:.3s;

}


.card:hover {

    transform:translateY(-8px);
    border-color:#5865f2;

}



.command-box {

    background:#11131a;
    padding:30px;
    border-radius:20px;
    max-width:600px;
    margin:auto;

}


.command-box p {

    color:#5865f2;
    font-size:20px;

}


.command-box span {

    color:#aaa;

}



.faq {

    max-width:700px;
    margin:auto;

}


.faq h3 {

    margin-top:30px;

}



footer {

    text-align:center;
    padding:40px;
    color:#777;

}



@media(max-width:700px){

.hero h1{

font-size:45px;

}

.links{

display:none;

}

}
