import PropTypes from 'prop-types';

const icons = {
  jpeg: '/vendor/assets/icons/icon-jpg.svg',
  jpg: '/vendor/assets/icons/icon-jpg.svg',
  mp4: '/vendor/assets/icons/icon-mp4.svg',
  pdf: '/vendor/assets/icons/icon-pdf.svg',
  png: '/vendor/assets/icons/icon-png.svg',
  svg: '/vendor/assets/icons/icon-svg.svg'
};

const FileIcon = (props) => {
  const { extension } = props;

  let icon;

  if (!extension) {
    icon = '/assets/icons/icon-other.svg';
  } else {
    icon = icons[extension] || '/assets/icons/icon-other.svg';
  }

  return <img src={icon} />;
};

FileIcon.propTypes = {
  extension: PropTypes.string
};

export default FileIcon
