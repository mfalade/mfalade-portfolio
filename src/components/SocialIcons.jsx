const SocialIcons = ({ variant = 'default' }) => {
  const iconClass = variant === 'orange' ? 'hero-socials orange' : 'hero-socials';
  
  return (
    <div className={iconClass}>
      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
      <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      <a href="#" aria-label="Blog"><i className="fas fa-blog"></i></a>
    </div>
  );
};

export default SocialIcons; 