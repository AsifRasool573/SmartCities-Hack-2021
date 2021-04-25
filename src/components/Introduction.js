import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    spacer: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
  }));

const Introduction = () => {
    const classes = useStyles()

    return (
        <div className={classes.spacer}>
            <Typography variant="h3">Introduction</Typography>
            <br/>
            <Typography variant="p">
                Smart City development has been a popular topic with the rise of technologies especially in the areas 
                of Internet of Things, embedded device, big data and cloud computing. More and more individual solutions 
                are being integrated together to achieve a smart city. Our team 'Smart Kookaburras' is a team of 8 people 
                that focuses on development of smart city in the traffic space. We believed that there are a lot of data 
                available in the traffic space which makes it possible to develop that area of smart city.
            </Typography>
            <br/><br/>
            <Typography variant="p">
                Our proposed solutions revolves around 'Smart Traffic to Reduce Carbon Emission from Transportation and Logistics'. 
                We believed that our solution can impact the development of smart city and also bring the highest impact to help 
                the communities. Apart from our practical solutions, we also develop this web application to bring awareness and insights 
                that we got to allow everyone to get the same level of understanding around this area.
            </Typography>
        </div>
    )
}

export default Introduction;