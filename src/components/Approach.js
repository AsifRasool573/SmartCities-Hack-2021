import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    spacer: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
  }));

const Approach = () => {
    const classes = useStyles();

    const ideas = [
        {
            title: 'Determining Popular Streets',
            description: `Understanding and determining the hot spot of vehicle is key insights to manage traffic efficiently in the city. 
            We have developed charts in getting the trend of vehicles parked according to a number of factors which includes time of the day, 
            day of the week and the distance of the streets from the city center.
            `,
        },
        {
            title: 'Vehicle Detection',
            description: `This system of ours aim to automatically detect registered vehicle using street cameras and map the information 
                to the database, so that monitoring of vehicles can be done. This will lead to efficient routing system which can improve 
                traffic conditions and reduce carbon emission.
                `,
        },
    ]

    return (
        <div className={classes.spacer}>
            <Card>
                <CardContent>
                    <Typography variant="h3">Approach</Typography>
                    <br/>
                    <Typography variant="p">
                        Our approach to tackle issues in heavy traffic and carbon emission caused by transportation 
                        is to understand the data that we have in bigger city. We also then developed a solution 
                        that can automatically detect and count vehicle types, models and colours to track and monitor 
                        the vehicles in the city. This will then help a better management and monitoring which can leads 
                        to develop efficient route management which automatically improves traffic conditions and reduce 
                        carbon emissions.
                    </Typography>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <Typography variant="h5">Key Ideas: </Typography>
                    <br/>
                    {ideas.map((idea) => 
                        <>
                            <Typography variant="h6">{idea.title}</Typography>
                            <Typography variant="p">{idea.description}</Typography>
                            <br/><br/>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default Approach;