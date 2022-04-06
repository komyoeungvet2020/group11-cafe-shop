import React from "react";
import styles from "../../../styles/Home.module.css";
import {Grid} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
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
      backgroundColor: 'green',
    },
    avatars: {
      backgroundColor: 'brown',
    },
    avatarm: {
      backgroundColor: red[500],
    },
  }),
);

const Detail = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Grid container direction="row" className={styles.img_content}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
       <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Khomyoueng VET"
        subheader="March 30, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://tse1.mm.bing.net/th?id=OIP.v3zEEO-BLi3DZQpDfXhoUwHaEK&pid=Api&P=0&w=327&h=183"
        title="New Caffee"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        If you like your coffee with more coffee, this is the type of coffee drink you need. Named for its ability to give your system a jump start, this is a full cup of coffee with an espresso shot stirred in.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={3} sm={3} md={3}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatars}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sovonthy Leng"
        subheader="March 25, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
        title="New Caffee"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        More cocktail than coffee drink, an Irish coffee is a combination of coffee, sugar, cream, and whiskey. This Irish coffee recipe is a great introduction.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={3} sm={3} md={3}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatarm}>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Maraka Due"
        subheader="March 24, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://tse2.mm.bing.net/th?id=OIP.ABwi0nknlpl_QyAyQLF5hwHaEK&pid=Api&P=0&w=311&h=174"
        title="New Caffee"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Coarsely ground coffee steeps in room temperature water for an extended period of time, resulting in a low-acidity, high-caffeine brew that's excellent enjoyed cold.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Grid container direction="row" className={styles.img_contents}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Khomyoueng VET"
        subheader="March 22, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://tse4.mm.bing.net/th?id=OIP.0i21asA6fBjLpkZ8a-tQpAHaEK&pid=Api&P=0&w=327&h=184"
        title="New Caffee"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        An alternative to plain, black drip coffee, the Americano consists of an espresso shot diluted with hot water.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={3}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatars}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sovonthy Leng"
        subheader="March 11, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://tse1.mm.bing.net/th?id=OIP.AtvuFULebyzDPZdiWMWI7gHaET&pid=Api&P=0&w=289&h=168"
        title="New Caffee"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        A fancy name for a simple drink — it means "coffee with milk" in French — café au lait is a cup of brewed coffee with warm milk.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
        <Grid item xs={3} sm={3} md={3}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatarm}>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Makara Due"
        subheader="March 12, 2022"
      />
      <CardMedia
        className={classes.media}
        image="https://tse4.mm.bing.net/th?id=OIP.QaPllub0FQ2RBkckYnRJsgHaFj&pid=Api&P=0&w=225&h=168"
        title="New Caffee"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Pressurized hot water passes through a filter containing finely ground, dark roasted beans. The force produces an especially concentrated.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </>
  );
};

export default Detail;
