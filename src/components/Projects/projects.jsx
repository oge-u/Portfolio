// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from 'react-icons/hi';
import './projects.css';
import SingleProject from './SingleProject';

const theme = {
        primary: '#your_primary_color',
        secondary: '#your_secondary_color',
        tertiary: '#your_tertiary_color',
        secondary70: '#your_secondary70_color' // Adjust the color codes according to your design
    
}; 
    const projectsData = [
        {
            id: 1,
            projectName: 'Project 1',
            projectDesc: 'Description of Project 1',
            tags: ['Tag1', 'Tag2'],
            code: 'https://github.com/your_username/project1',
            demo: 'https://your_demo_link.com',
            image: 'project1_image_url'
        },
        {
            id: 2,
            projectName: 'Project 2',
            projectDesc: 'Description of Project 2',
            tags: ['Tag3', 'Tag4'],
            code: 'https://github.com/your_username/project2',
            demo: 'https://your_demo_link.com',
            image: 'project2_image_url'
        },
        // Add more projects as needed
    ];
    
// Define your projectsData array here

function Projects({ theme, projectsData }) {
    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.tertiary,
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.tertiary,
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary,
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects--header">
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export { Projects, theme, projectsData };
