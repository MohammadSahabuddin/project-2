export default {
  embla: {
    position: 'relative',
    padding: '20px',
    maxWidth: '670px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  emblaViewport: {
    overflow: 'hidden',
    width: '100%',
    '&.embla__viewport.is-draggable': { cursor: ['move', 'grab'] },
    '&.embla__viewport.is-dragging': { cursor: 'grabbing' },
  },

  emblaContainer: {
    display: 'flex',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    KhtmlUserSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: '-10px',
  },
  emblaSlide: {
    position: 'relative',
    minWidth: '100%',
    paddingLeft: '10px',
  },
  emblaSlideInner: {
    position: 'relative',
    overflow: 'hidden',
    height: '190px',
  },
  emblaSlideImg: {
    position: 'absolute',
    display: 'block',
    top: '50%',
    left: '50%',
    width: 'auto',
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none',
    transform: 'translate(-50%, -50%)',
  },
  emblaButton: {
    outline: '0',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    touchAction: 'manipulation',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    border: '0',
    width: '30px',
    height: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    fill: '#1bcacd',
    padding: '0',
    '&.embla__button--prev': {
      left: '27px',
    },
    '&.embla__button--next': {
      right: '27px',
    },
    '& .embla__button__svg': { width: '100%', height: '100%' },
  },
};
