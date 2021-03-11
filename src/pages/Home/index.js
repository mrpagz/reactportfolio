import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Container from "../../components/Container/index";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
// import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./style.css";

function About() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        paddingBottom: 50,
      },
    },
    fontFamily: "Chivo",
  }));

  const classes = useStyles();
  const checked = true;

  return (
    <div style={{ overflow: "hidden" }}>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Paper id="paper" className={classes.paper}>
          <div>
            {/* <h1 id="welcome">Welcome to my PAGE!!!</h1> */}

            <div id="image-div">
              <img
                id="my-photo"
                src="https://github.com/mrpagz/images/blob/master/portfolio/francisroy.png?raw=true"
                alt="Me, sitting"
              ></img>
            </div>

            <Container>
              <div id="transparent-backdrop">
                <p id="about">
                  I am a Web Developer and a full-time Dad from New Jersey, USA. I love converting intricate Web code problems
                  to a smooth and glassy code interface. I am always the Code Responder if your HTML, CSS, JAVASCRIPT and REACT is in
                  "Code Blue".
                  {/* Check out some of my applications over here:
                <IconButton>
                  <DoubleArrowIcon
                  color="primary"
                  fontSize="large"
                  >
                  </DoubleArrowIcon>
                </IconButton> */}
                </p>

                <div id="contact-div">
                  <div id="contact-info">
                    <strong style={{ fontStyle: "italic", fontSize: 20 }}>
                      Contact me:
                    </strong>
                    <br />
                    francisroy1124@gmail.com
                    <br />
                    (856) 353 9153
                  </div>
                  <div id="contact-buttons">
                    <IconButton
                      aria-label="github"
                      href="https://github.com/mrpagz"
                      color="primary"
                    >
                      <GitHubIcon></GitHubIcon>
                    </IconButton>

                    <IconButton
                      aria-label="linkedin"
                      color="primary"
                      href=""
                    >
                      <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 10 }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                        href=""
                      >
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Paper>
      </Grow>
    </div>
  );
}

export default About;
