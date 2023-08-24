import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Card, CardActionArea, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import './../../index.css'
import frontend from './../../assets/frontend.svg'
import backend from './../../assets/backend.svg'
import languages from './../../assets/languages.svg'
import others from './../../assets/other_skills.svg'

const Skills = () => {
    const skillCatgs = [
        {
            id: 1,
            title: 'Frontend',
            art: frontend,
            skills: ['ReactJS', 'MUI', 'Bootstrap', 'Framer Motion']
        },
        {
            id: 2,
            title: 'Backend',
            art: backend,
            skills: ['NodeJS', 'Spring Boot', 'My Batis']
        },
        {
            id: 3,
            title: 'Languages',
            art: languages,
            skills: ['C++', 'JavaScript', 'HTML5', 'Python', 'Java']
        },
        {
            id: 4,
            title: 'Others',
            art: others,
            skills: ['Dell Boomi', 'Photoshop']
        }
    ]

    const [selectedId, setSelectedId] = useState(null)

    const handleClose = () => {
        return 0;
    }

    const style = {
        borderRadius: 26,
        boxShadow: ''
    }

    return (
        <div sx={{ 'display': 'flex', 'flexDirection': 'row' }}>
            {skillCatgs.map((skillCat) => (
                <>
                    <motion.div style={{ display: 'inline-block', margin: 4 }} key={skillCat.id} layoutId={skillCat.id} onClick={() => setSelectedId(skillCat.id)}>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={skillCat.art}
                                    alt={skillCat.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {skillCat.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </motion.div>

                    <AnimatePresence>
                        {selectedId && (
                            <Modal
                                open={selectedId === null ? false : true}
                                onClose={() => setSelectedId(null)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <motion.div layoutId={selectedId} className='modalCard'>
                                    <motion.h2>{skillCat.title}</motion.h2>
                                </motion.div>

                            </Modal>
                        )}
                    </AnimatePresence>

                </>
            ))}
        </div>
    )

}

export default Skills