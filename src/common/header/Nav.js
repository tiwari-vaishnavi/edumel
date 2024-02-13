import React , { useRef, useEffect , useState} from 'react';

const Nav = () => {

    const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const spanElement = document.createElement('span');
      spanElement.className = 'menu-trigger';
      spanElement.innerHTML = '<i class="fal fa-angle-down"></i>';
      containerRef.current.appendChild(spanElement);
    }
  }, []);

  const [menuItems, setMenuItems] = useState([
    {
        label: 'Home',
        link: '#',
        class: 'current',
        submenu: [
          { label: 'Home One', link: '/' },
          { label: 'Home Two', link: '/'},
        ],
        submenuOpen: false, 
    },
    {
        label: 'About',
        link: '/',
        
    },
    {
      label: 'Courses',
      link: '#',
      submenu: [
        { label: 'Courses', link: '/' },
        { label: 'Course Grid 2 ', link: '/' },
        { label: 'Course Grid 3', link: '/' },
        { label: 'Course Grid 4', link: '/' },
        { label: 'Course List', link: '/' },
        { label: 'Course Single 1', link: '/' },
        { label: 'Course Single 2', link: '/' },
      ],
    },
    {
        label: 'Pages',
        link: '#',
        submenu: [
          { label: 'Instructors', link: '/'},
          { label: 'Login', link: '/' },
          { label: 'Register', link: '/' },
        ],
        submenuOpen: false, 
    },
    {
        label: 'Blog',
        link: '/',
        
    },
    {
        label: 'Contact',
        link: '/',
        
    },

  
  ]);
  useEffect(() => {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        item.submenu && item.submenu.length > 0
          ? { ...item, hasSubmenu: true }
          : item
      )
    );
  }, []);

const handleSubmenuToggle = (index) => {
    setMenuItems((prevMenuItems) => {
      const newMenuItems = [...prevMenuItems];
      newMenuItems[index].submenuOpen = !newMenuItems[index].submenuOpen;
      return newMenuItems;
    });
  };

    return (
        
        <ul className="primary-menu">
            {menuItems.map((item, index) => (
          <li key={index}>

            <a href={item.link}>
              {item.label}
            </a>

            {item.submenu && (
              <span
                className={`menu-trigger ${item.submenuOpen ? 'open' : ' '}`}
                onClick={() => handleSubmenuToggle(index)}
              >
            
                <i 
                className={`submenu-icon ${item.submenuOpen ? 'fal fa-angle-up' : 'fal fa-angle-down'}`}>
              </i>
              </span>
            )}
            {item.submenu && (
              <ul className={`submenu ${item.submenuOpen ? 'open' : ''}`}
              
              >
                {item.submenu.map((subitem, subindex) => (
                   <li key={subindex} >
                    <a href={subitem.link}>{subitem.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

    </ul>

    )
}
export default Nav;
