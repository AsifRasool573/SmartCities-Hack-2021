import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


import MainAppBar from "../components/MainAppBar";
import Introduction from "../components/Introduction";
import ProblemStatement from '../components/ProblemStatement';
import Approach from '../components/Approach';
import Process from '../components/Process';
import ContentCard from '../components/ContentCard';

import vehicleDetection from '../images/vehicle_detection.png';
import popularStreets from '../images/popular_streets.png';

const useStyles = makeStyles(() => ({
    content: {
        paddingTop: 50,
        backgroundColor: grey[200],
        minHeight: "100vh",
        paddingBottom: 50,
    },
  }));

const Home = () => {
    const classes = useStyles();

    const khaiContents = [
        `This project aims to count, detect and map information back to the dataset 
        that is available in the original dataset especially the count. In the 
        development of a smart city, it is very important to keep track of registered 
        vehicles and this can be done by monitoring the streets using street camera.
        `,
        `This system can use to track the location of these vehicle based on where these 
        vehicles are detected, which can highly improve the transparency in the logistic sector, 
        and can also monitor the Carbon Emission based on detecting the path taken and traffic 
        conditions these vehicles are in
        `,
        '',
        `The system can be separate into 3 sections; vehicle detection, model detection, colour 
        extraction to help keeping track of the count/status of these registered vehicles.
        `,
        '',
        `
        The vehicle detection part can make use of state-of-the-art object detection algorithm such 
        as [RCNN, ResNet, RetinaNet, SSD] to detect vehicle on the road. The bounding box can then be 
        cropped taking the individual image to the next stage of this pipeline
        `,
        `
        The vehicle model detection can then classify cropped vehicle image to predict the model and make 
        of the vehicle.
        `,
        `
        The cropped image can also be passed to the script that extracts the colour of the vehicle. These 
        information that are gained can then be sufficient to map back to the raw dataset/database that 
        keep tracks the count of these registered vehicle based on its type
        `,
        `
        For this system, we have developed an MVP which includes the program to extract the vehicle colour and 
        a deep learning model to classify vehicle type. These services can be found in our repository, 
        https://gitlab.com/khaifahmi99/smart_kookaburras
        `,
        ''
        ,
        `Dataset Used: Cars196 (Stanford), Registerd Vehicle Count By Colours (data.gov.au)` 
    ];

    const shaheerContent = [
        `Understanding the traffic conditions will be the first step in tackling traffic issues in the 
        process of developing smart city.
        `,
        '',
        `We are using the data from data.gov.au to understand the traffic conditions in Victoria, Australia 
        and make analysis based on the streets, vehicle counts and suburbs. This can then be a vital information 
        in developing a real-time database to aid the development of smart parking system, efficient routing system and 
        security monitoring system which are components in developing smart city.
        `,
        '',
        `Dataset Used: Yarra Traffic Counts (data.gov.au)`,
    ]

    return(
        <>
            <MainAppBar />
            <div className={classes.content}>
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item spacing={2} xs={12}>
                            <Introduction />
                        </Grid>
                        <Grid item spacing={2} xs={12} lg={6}>
                            <ProblemStatement />
                            <Process />
                        </Grid>
                        <Grid item spacing={2} xs={12} lg={6}>
                            <Approach />
                        </Grid>
                        <Grid item spacing={2} xs={12}>
                            <ContentCard
                                title={'Vehicle Recognition'}
                                image={vehicleDetection}
                                contents={khaiContents}
                                imageWidth={5}
                                contentWidth={7}
                            />
                        </Grid>
                        <Grid item spacing={2} xs={12}>
                            <ContentCard
                                title={'Popular Street Analysis'}
                                image={popularStreets}
                                contents={shaheerContent}
                                // imageWidth={5}
                                // contentWidth={7}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Home;