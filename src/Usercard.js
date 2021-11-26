import React from 'react'
import './Usercard.css';

const UseEffectAPI = ({waiting,users}) => {
    return waiting ? (   
          <div className="imgdiv">
            <img src="https://miro.medium.com/max/875/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Waiting"/>
          </div>
        ) : 
        (
        <div className="container-fluid bg text-center">
            <div className="row p-0">
                {users.length &&
                users.map((user) => {
                return (
                    
                        <div className="col-md-4 col-12 py-2" key={user.id}>
                            <div className="card">
                                <img src={user.avatar} alt="images" className="img-fluid"/>
                                    <div className="content">
                                        <a href="#">{user.email}</a>
                                        <h2>
                                            {user.first_name} {user.last_name}
                                        </h2>
                                    </div>
                            </div>
                        </div>
                    
                    );
            
                })}
            </div>
        </div>
        )
}

export default UseEffectAPI;