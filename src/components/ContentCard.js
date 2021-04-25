import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    spacer: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
  }));

const ContentCard = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.spacer}>
            <Card>
                <CardContent>
                    <Typography variant="h3">{props.title}</Typography>
                    <br/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={props.imageWidth ? props.imageWidth : 4}>
                            <Image
                                src={props.image}
                            />
                        </Grid>
                        <Grid item xs={12} lg={props.contentWidth ? props.contentWidth : 8}>
                            {/* Content */}
                            <Typography variant="p">
                                {props.contents.map((content) => (
                                    <>
                                        <Typography variant="p">{content}</Typography>
                                        <br/>
                                    </>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default ContentCard;