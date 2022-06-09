
import { AiOutlineStar } from 'react-icons/ai';
import classes from './card.module.css'

function Card(props) {
       return (
              <article  className = {classes.card}>
                    <div className ={classes.header}>
                        <p>{props.title}</p>
                    </div>
                     <div className ={classes.content}>
                         <p>{props.content}</p>
                     </div>
                     <div className ={classes.base}>
                         <div>
                             <a target='_rel="noreferrer" blank' href={props.url} >Read Full Story</a>
                             <span>
                                <AiOutlineStar 
                                size={22} 
                                color='#e1e1e1'  />
                                <p>
                                    Add to bookmarks
                                </p>
                             </span>
                         </div>
                         <p>5 mins ago</p>
                     </div>
              </article>
       )
}

export default Card;