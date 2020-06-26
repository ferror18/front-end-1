// import React, { useState } from 'react';
// import ClassDetails from './ClassDetails'
// import {StyledCard} from '../styles/StyledClass'
// import { connect } from 'react-redux';
// import { joinClass, leaveClass } from "../actions";
// import { Card } from '@material-ui/core';

// function ClassCard({fitnessClass, leaveClass, joinClass}){
//     // console.log(fitnessClass);
//     const {title, categoryId, id} = fitnessClass
//     const [ hide, setHide ] = useState(true)

//     return(
//         <Card onClick={()=>{setHide(!hide)}}>
//             <h2>{title}</h2>
//             <form hidden={hide}>
//                 <button onClick={(e)=>{e.preventDefault();joinClass(id);console.log('Joined Class')}}>Join Class</button>
//                 <button onClick={(e)=>{e.preventDefault();leaveClass(id);console.log('Left Class')}}>Leave Class</button>
//             </form>
//         </Card>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         id: state.id, 
//         classes: state.classes 
//     }
// }
// export default connect(mapStateToProps,{ joinClass, leaveClass })(ClassCard)



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClassDetails from './ClassDetails'
import {StyledCard} from '../styles/StyledClass'
import { connect } from 'react-redux';
import { joinClass, leaveClass } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function ClassCard({fitnessClass, leaveClass, joinClass}){
    console.log(fitnessClass);
    const {title, categoryId, id, scheduleTime} = fitnessClass
    const [ hide, setHide ] = useState(true)

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let categories = JSON.parse(localStorage.getItem('categories'));
  function getDescription(){
    if (categories !== undefined || categories !== null) {
            return (categories.filter(element => {
                return categoryId === element.id
            })[0].description)
    }else{
        return 'no description'
    }
    }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        subheader={scheduleTime?scheduleTime:"September 14, 2016"}
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/200/300"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {
              (categories === undefined || categories === null)?([]):(getDescription())
          }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <button onClick={(e)=>{e.preventDefault();joinClass(id);console.log('Joined Class')}}>Join Class</button>
                <button onClick={(e)=>{e.preventDefault();leaveClass(id);console.log('Left Class')}}>Leave Class</button>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
          <Card onClick={()=>{setHide(!hide)}}>
             </Card>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const mapStateToProps = (state) => {
    return {
        id: state.id, 
        classes: state.classes 
    }
}
export default connect(mapStateToProps,{ joinClass, leaveClass })(ClassCard)