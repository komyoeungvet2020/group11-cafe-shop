import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { Grid} from "@material-ui/core";
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);


const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Home Cafe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className={styles.title}>
        Welcome to{" "}
        <Link href="/">
          <a>Caffee Page</a>
        </Link>
      </h3>

      <Grid container>
        <Grid item sm={12} md={6}>
          <Link href="/listing" passHref>
            <div className={styles.card_home}>
              <h3>Listing &rarr;</h3>
              <p>Welcome to our Cafe</p>
            </div>
          </Link>
        </Grid>
        <Grid item sm={12} md={6}>
          <Link href="/detail" passHref>
            <div className={styles.card_home}>
              <h3>Detail &rarr;</h3>
              <p>Welcome to Detail!</p>
            </div>
          </Link>
        </Grid>
      </Grid>
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {cafeImageItem.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title}/>
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
};

const cafeImageItem = [
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.v3zEEO-BLi3DZQpDfXhoUwHaEK&pid=Api&P=0&w=327&h=183',
    title: 'Popular Caffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.ABwi0nknlpl_QyAyQLF5hwHaEK&pid=Api&P=0&w=311&h=174',
    title: 'New Caffee',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.0i21asA6fBjLpkZ8a-tQpAHaEK&pid=Api&P=0&w=327&h=184',
    title: 'Cafe Wallpapersy',
  },
];
export default Home;
