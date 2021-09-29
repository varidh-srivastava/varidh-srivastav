import React from "react";
function List(){
    const products=[
        
        {
            name:"FRONTEND  LANGUAGES",
            capital:"HTML,CSS,JAVASCRIPT,REACT,JQUERY,TYPESCRIPT"
        },
        {
            name:"BACKEND LANGUAGES",
            capital: "PHP,PYTHON,JAVA,RUST,RUBY,C#"
        }
    ];

    return(
       <div className='card'>
           <h1 className="heading">WEB DEVELOPMENT</h1>
          <hr/>
           <h5 className="productClass" >
              {
                   products.map((product,index) =>(
                    <div key={index}>
                        <h1 className='productName'>{product.name}</h1>
                        <p className='productCapital'>{product.capital}</p>
                    </div>
                ))
              }
           </h5>
       </div>
    )
}



export default List;