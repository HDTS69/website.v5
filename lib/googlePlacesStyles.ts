export const applyGooglePlacesStyles = (pac: HTMLElement, inputRef: HTMLElement | null) => {
  if (!pac || !inputRef) return;

  const rect = inputRef.getBoundingClientRect();
  
  // Add a custom class to help with style specificity
  pac.classList.add('hd-trade-pac-container');
  
  // Container styles
  const containerStyles = {
    backgroundColor: '#000000 !important',
    border: '1px solid #333333 !important',
    borderRadius: '0.5rem !important',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3) !important',
    marginTop: '4px !important',
    padding: '8px 0 !important',
    zIndex: '99999 !important',
    position: 'fixed !important',
    width: `${inputRef.offsetWidth}px !important`,
    left: `${rect.left}px !important`,
    top: `${rect.bottom + 4}px !important`,
    fontFamily: 'inherit !important',
  };

  // Apply container styles
  Object.entries(containerStyles).forEach(([key, value]) => {
    pac.style.setProperty(key, value, 'important');
  });

  // Apply styles to each item
  pac.querySelectorAll('.pac-item').forEach((item) => {
    const itemEl = item as HTMLElement;
    const itemStyles = {
      backgroundColor: '#000000 !important',
      color: '#00E6CA !important',
      padding: '12px 16px !important',
      cursor: 'pointer !important',
      fontSize: '0.875rem !important',
      border: 'none !important',
      borderBottom: '1px solid #333333 !important',
      display: 'flex !important',
      alignItems: 'center !important',
      gap: '8px !important',
      transition: 'all 0.2s ease !important',
      margin: '0 !important',
      fontFamily: 'inherit !important',
    };

    Object.entries(itemStyles).forEach(([key, value]) => {
      itemEl.style.setProperty(key, value, 'important');
    });

    // Style the main text
    const mainText = itemEl.querySelector('.pac-item-query') as HTMLElement | null;
    if (mainText) {
      const mainTextStyles = {
        color: '#00E6CA !important',
        fontSize: '0.875rem !important',
        fontFamily: 'inherit !important',
        padding: '0 !important',
        margin: '0 !important',
      };

      Object.entries(mainTextStyles).forEach(([key, value]) => {
        mainText.style.setProperty(key, value, 'important');
      });

      // Style the matched text
      const matched = mainText.querySelector('.pac-matched') as HTMLElement | null;
      if (matched) {
        const matchedStyles = {
          color: '#00E6CA !important',
          fontWeight: '600 !important',
          textDecoration: 'none !important',
        };

        Object.entries(matchedStyles).forEach(([key, value]) => {
          matched.style.setProperty(key, value, 'important');
        });
      }
    }

    // Style the secondary text
    const secondaryText = itemEl.querySelector('.pac-secondary-text') as HTMLElement | null;
    if (secondaryText) {
      const secondaryTextStyles = {
        color: '#00E6CA !important',
        opacity: '0.8 !important',
        fontSize: '0.875rem !important',
        fontFamily: 'inherit !important',
        padding: '0 !important',
        margin: '0 !important',
      };

      Object.entries(secondaryTextStyles).forEach(([key, value]) => {
        secondaryText.style.setProperty(key, value, 'important');
      });
    }

    // Add hover effect using data attributes to track state
    itemEl.addEventListener('mouseenter', () => {
      itemEl.setAttribute('data-hovered', 'true');
      const hoverStyles = {
        backgroundColor: '#000000 !important',
        color: '#ffffff !important',
      };

      Object.entries(hoverStyles).forEach(([key, value]) => {
        itemEl.style.setProperty(key, value, 'important');
      });

      // Update text colors on hover
      if (mainText) {
        mainText.style.setProperty('color', '#ffffff', 'important');
        const matched = mainText.querySelector('.pac-matched') as HTMLElement | null;
        if (matched) {
          matched.style.setProperty('color', '#00E6CA', 'important');
        }
      }
      if (secondaryText) {
        secondaryText.style.setProperty('color', '#ffffff', 'important');
      }
    });

    itemEl.addEventListener('mouseleave', () => {
      itemEl.removeAttribute('data-hovered');
      const defaultStyles = {
        backgroundColor: '#000000 !important',
        color: '#00E6CA !important',
      };

      Object.entries(defaultStyles).forEach(([key, value]) => {
        itemEl.style.setProperty(key, value, 'important');
      });

      // Restore text colors
      if (mainText) {
        mainText.style.setProperty('color', '#00E6CA', 'important');
        const matched = mainText.querySelector('.pac-matched') as HTMLElement | null;
        if (matched) {
          matched.style.setProperty('color', '#00E6CA', 'important');
        }
      }
      if (secondaryText) {
        secondaryText.style.setProperty('color', '#00E6CA', 'important');
        secondaryText.style.setProperty('opacity', '0.8', 'important');
      }
    });
  });

  // Remove the last border-bottom
  const items = pac.querySelectorAll('.pac-item');
  if (items.length > 0) {
    const lastItem = items[items.length - 1] as HTMLElement;
    lastItem.style.setProperty('border-bottom', 'none', 'important');
  }

  // Hide the default icon
  pac.querySelectorAll('.pac-icon').forEach((icon) => {
    const iconEl = icon as HTMLElement;
    iconEl.style.setProperty('display', 'none', 'important');
  });

  // Add a style tag for additional specificity
  const styleTagId = 'hd-trade-pac-styles';
  if (!document.getElementById(styleTagId)) {
    const styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    styleTag.textContent = `
      .hd-trade-pac-container {
        background-color: #000000 !important;
        border: 1px solid #333333 !important;
        font-family: inherit !important;
      }
      .hd-trade-pac-container .pac-item {
        background-color: #000000 !important;
        color: #00E6CA !important;
        font-family: inherit !important;
      }
      .hd-trade-pac-container .pac-item:hover {
        background-color: #000000 !important;
        color: #ffffff !important;
      }
      .hd-trade-pac-container .pac-item-query {
        color: #00E6CA !important;
        font-family: inherit !important;
      }
      .hd-trade-pac-container .pac-item:hover .pac-item-query {
        color: #ffffff !important;
      }
      .hd-trade-pac-container .pac-matched {
        color: #00E6CA !important;
        font-weight: 600 !important;
        text-decoration: none !important;
      }
      .hd-trade-pac-container .pac-item:hover .pac-matched {
        color: #00E6CA !important;
      }
      .hd-trade-pac-container .pac-secondary-text {
        color: #00E6CA !important;
        opacity: 0.8 !important;
        font-family: inherit !important;
      }
      .hd-trade-pac-container .pac-item:hover .pac-secondary-text {
        color: #ffffff !important;
      }
    `;
    document.head.appendChild(styleTag);
  }
}; 