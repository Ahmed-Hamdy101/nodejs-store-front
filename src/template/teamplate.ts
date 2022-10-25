 const html =(route:string)=>{
 return `
 <!DOCTYPE HTML>
 <html>
 <head>
 <!-- Font Awesome -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>
<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<!-- MDB -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
  rel="stylesheet"
/>
 </head>
 <body> 
 <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light" style="background:#2f3237">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <a class="navbar-brand me-2 text-info" href="#" style="font-size:1.8rem;font-weight:bolder;">
      UDACITY
    </a>

    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
   
      </ul>
      <!-- Left links -->

      <div class="d-flex align-items-center">
    
     
        <a
          class="btn btn-dark px-3"
          href="https://github.com/"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->

 <section id="screen" class="text-center pt-5 mt-5  m-auto" style="
 height: 250px;
 width: 400px;
 border: solid 25px rgb(211, 204, 204);
 border-radius: 14px;
 ">

 <p class=" text-info" style=" font-size:4rem;font-weight:bolder;"> Udacity </p>
 <p class=" text-success" style="font-size:1rem;font-weight:bolder;"> You're in ${route}  </p>
</section>
<div  class=" m-auto" style="  width: 40px;height: 70px;background: rgb(211, 204, 204);margin-left: 180px;">  
</div>
<div class=" m-auto" style="width: 180px;height: 30px;background: rgb(211, 204, 204);margin-left: 110px;border-radius: 14px;">
</div>
<div class=" d-flex justify-content-center m-2">
<div class="card w-25 ">

<section class="card-body"> 

<span class="badge bg-danger rounded-circle text-center"> 1 </span>  You have got one message   
<hr>
<p class="text-success!">I am very Tired I haven't got any sleep for 4 days I was need more days to delpoy  a good UI but i can't since i am dealing withh another project after 10 days! anyway thank you </p>
</section>
</div>
</div>
<!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"
></script>
</html>
`
    
}

export default html;