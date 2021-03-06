//Packages
import { Box, Grid } from '@mui/material';

//image
import image from 'Assets/h1-img-6.png';

//styles
import styles from 'Styles/Brand/Brand.style';

//Component
import BrandRight from './BrandRight';
import BrandSvg from 'Components/Backgrounds/Brand.svg';

const Brand = () => {
  return (
    <Box sx={styles.Brands}>
      <Grid container columnSpacing={2} sx={styles.Grid}>
        <Grid item md={9.5}>
          <Box sx={styles.Image}>
            <Box component="img" src={image} alt="Logo" width="100%" />
          </Box>
        </Grid>
        <Grid item md={2.5}>
          <Box sx={styles.Texts}>
            <BrandRight />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <BrandSvg />
      </Box>
    </Box>
  );
};

export default Brand;
