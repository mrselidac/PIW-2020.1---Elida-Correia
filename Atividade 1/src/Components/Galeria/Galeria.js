import React,{Component} from 'react';
import './Galeria.css'
import Postagens from './../Postagens/Postagens'
import Postagens2 from './..Postagens/Postagens2'

export default class Galeria extends Component{
    render(){
        return(
            <>            
              <div className="container">

                <div class="gallery">
                        <a target="_blank" href="img_forest.jpg">
                        <img src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/p720x720/84998533_2813942458652236_6365493900378898432_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQmHk8znuHLDvxcGoMwjkqTc7t55poBxktX9vZWLT9yI_dp14dhVsy5NfMkh3-eGASI&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=6&oh=2719681f49300007599a056ae8fcc870&oe=5E926245" alt="Forest" width="200px"/>
                        </a>

                        <Postagens/>
                    </div>  
                    <div class="gallery">
                        <a target="_blank" href="img_forest.jpg">
                        <img src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/85016156_1227204540804979_727545594263896064_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQkXvFYmXP3uulQsg2KTHOiJEvy9Leno0Jk8smwHMb2Ti0eB8Q1gYbN-20DW4db7KgA&_nc_ht=scontent.fjdo10-1.fna&oh=7de408b3623c7a055912d07605459927&oe=5E93A32E" alt="Forest" width="200" height="200"/>
                        </a>

                        <Postagens/>
                    </div>

                </div>

            </>
        )
    }
}
