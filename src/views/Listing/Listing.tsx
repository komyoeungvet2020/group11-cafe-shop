import React from "react";
import styles from "../../../styles/Home.module.css";
import {Grid} from "@material-ui/core";
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const Listing = () => {
  return (
    <Grid container direction="row" className={styles.img_content}>
        <Grid item xs={12} sm={6}>
        <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"            
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Grid>
    </Grid>
  );
};

const itemData = [
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.QaPllub0FQ2RBkckYnRJsgHaFj&pid=Api&P=0&w=225&h=168',
    title: 'Caffee brand',
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.AtvuFULebyzDPZdiWMWI7gHaET&pid=Api&P=0&w=289&h=168',
    title: 'Cafe expresso',
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.v3zEEO-BLi3DZQpDfXhoUwHaEK&pid=Api&P=0&w=327&h=183',
    title: 'Popular Caffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Phnom Penh Coffee',
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.ABwi0nknlpl_QyAyQLF5hwHaEK&pid=Api&P=0&w=311&h=174',
    title: 'Khmer Cafe',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.0i21asA6fBjLpkZ8a-tQpAHaEK&pid=Api&P=0&w=327&h=184',
    title: 'Cafe Wallpapersy',
  },
];
export default Listing;
