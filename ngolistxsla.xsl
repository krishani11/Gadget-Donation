<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
  <style>

    *{
  margin: 0;
  padding: 0;
}

header{
  background-image:url(background.jpg); 
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment:fixed;
font-family:calibri;

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
  text-decoration:bold;
  color:black;
  padding: 5px 45px;
  border-color: black;
  transition: 0.5s ease;
}

.main ul li a:hover{
  background-color: #000;
  color: #fff;
}
.main ul li.active a
{
  background-color: #000;
  color: #fff;
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
border:2px solid black;
font-family:calibri;

}
 

th
{
border: 2px solid black; 
text-align:center;
height:65px;
font-size:25px;
font-weight:bold;
text-decoration:underline;
width:20%;
}

table td
{
 border: 2px solid black; 
text-align:center;
height:62px;
font-size:22px; 
width:30px;
}



</style>
</head> 
<body>
  <header>
  <div class="main">
    <ul>
      <li><a style="font-size: 25px" href="home.html"> Home</a></li>
      <li><a style='font-size:25px' href='#'>View Donator Details</a></li>
      <li class="active"><a style="font-size: 25px" href="#">View NGO Details</a></li>
      <li><a style="font-size: 25px" href="viewreq.html">View Request</a></li>
    </ul>
  </div>
</header>
 <table border="1">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Nationality</th>
    </tr>
    <xsl:for-each select="donation/ngo">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="email"/></td>
      <td><xsl:value-of select="number"/></td>
      <td><xsl:value-of select="@category"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>