import "../Gallery/Gallery.scss";
import { GALLERY_IMAGES } from "../../ListConstant.js";
import React from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    p: 4,
};

export default function Gallery() {
    const [open, setOpen] = React.useState(false); // State to control the modal
    const [selectedImage, setSelectedImage] = React.useState(null); // State to store the selected image



    // Open the modal with the clicked image
    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    // Close the modal
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <div id="gallery" className="gallery">
            <h1><span className="letter_color">g</span>limpse <span className="letter_color">o</span>f <span className="letter_color">b</span>liss <span className="letter_color">t</span>one</h1>
        <div className="gallery-container">

            <div className="image-container">

                <ImageList
                    className="box_scroll" sx={{ width: '100%', height: 600, padding: '12px', overflowY: 'scroll' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={'100%'}
                    gap={10}
                >
                    {GALLERY_IMAGES.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
                            onClick={() => handleClickOpen(item.img)}

                            className={open ? '' : 'hoverable'}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
            >
                {/* Wrapper for positioning the button correctly */}
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    {/* IconButton positioned outside the Box but still within the modal */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            color: '#ffff',
                            top: 16,
                            right: 16,
                            zIndex: 1301, // Ensures it's above modal content
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Modal content */}
                    <Box sx={style}>
                        <img
                            src={selectedImage}
                            alt="Online Image"
                            className="imgGallery"

                        />
                    </Box>
                </Box>
            </Modal>


        </div>
        </div>
    );
}

    {/* <div id='gallery' className="gallery-container">
       
    {/* </>)
} */}