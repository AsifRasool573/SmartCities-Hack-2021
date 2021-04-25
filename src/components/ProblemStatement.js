import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    spacer: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
  }));

const ProblemStatement = () => {
    const classes = useStyles()

    return (
        <div className={classes.spacer}>
            <Card>
                <CardContent>
                    <Typography variant="h3">Problem Statement</Typography>
                    <br/>
                    <Typography variant="p">
                        Traffic and logistic management has been big challenge in developing smart city 
                        because there are small amount of solution and data in this area. Traffic and logistic 
                        has also been a concerned area in the nature because the high rise of vehicle and traffic 
                        problems has caused problem such as heavy traffic and high level of carbon emission. This 
                        is a big problem and has to be tackled in order to provide a safe environemnt in a city and to 
                        the communities.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProblemStatement;