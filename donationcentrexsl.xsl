<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<head>
<style>
  *{
	margin: 0;
	padding: 0;
	font-family: Calibri;
	font-color:white;
}
header{
	background-image:url(lightingbook.jpg);
	width:100%; 
	height: 100vh;
	background-size: cover;
	background-position: center;
}
.main ul{
	float: left;
	list-style-type:none;
	margin-top: 25px;

}
.main ul li{
	display: inline-block;

}
.main ul li a{
	text-decoration: none;
	color:white;
	padding: 5px 35px;
	border-color: black;
	transition: 0.5s ease;
}
main ul li a:hover{
	background-color: #fff;
	color: #000;
}
.main ul li.active a
{
	background-color: #fff;
	color: #000;
}

table
{
position: absolute;
top:20%;
left:20%;
border-collapse:collapse;
padding:5px;
width:60%;
background:rgba(0,0,0,0.6);
color:white;
border:3px solid white;
font-family:calibri;

}
 

th
{
border: 2px solid white; 
text-align:center;
height:65px;
font-size:25px;
font-weight:bold;
text-decoration:underline;
width:20%;
}

table td
{
 border: 2px solid white; 
text-align:center;
height:62px;
font-size:22px; 
width:30px;
}



</style>
</head>
<body>
<h2>"Our Donation Centres"</h2>
<header>
<div class="main">
		<ul>
			<li><a style="font-size: 25px" href="welcome.html"> Home</a></li>
			<li><a style="font-size: 25px" href="#"> About</a></li>
			<li><a style="font-size: 25px" href="#">Donator Dashboard</a></li>
			<li><a style="font-size: 25px" href="#">Executive Dashboard</a></li>
			<li class="active"><a style="font-size: 25px" href="donationcentre.xml">Donation Centres</a></li>
			<li><a style="font-size: 25px" href="#">Request Books</a></li>
		</ul>
	</div>
</header>
 <table border="2">
    <tr>
      <th>Name</th>
      <th>Email Id</th>
      <th>Address</th>
      <th>Year of Establishment</th>
    </tr>
    <xsl:for-each select="Donationcentre/centre">
    <tr>
      <td><xsl:value-of select="Name"/></td>
      <td><xsl:value-of select="Email_Id"/></td>
      <td><xsl:value-of select="Year_of_establishment"/></td>
      <td><xsl:value-of select="@type"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>