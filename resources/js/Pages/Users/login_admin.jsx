import React from "react";



function Header(){
    return(
        <>
             <div className="row">
                 <div class="col-sm-4"></div>
                 <div class="col-sm-4"></div>
                 <div class="col-sm-4"></div>
                 
             </div>
        </>
    )
    
}
function Body(){
     return(
         <>
             <div class="row">
                 <div class="col-sm-1">2</div>
                 <div class="col-sm-6">2</div>
                 <div class="col-sm-4">
                     <section>
                         <form>
                            <h1>ADMIN LOGIN</h1>
                         </form>

                     </section>                    
                 </div>
                 <div class="col-sm-1">2</div>

             </div>
         </>
     )
}


export default function AdminLogin(){
    return(
         <>
             <div className="container-fluid bg-light">
                 <Header/>
                 <Body/>

             </div>
           
         </>
    );
}