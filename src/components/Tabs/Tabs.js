import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import tabs from "./tabs";

import styles from "./Tabs.module.css";

const Tabs = ({ selectTab, selectedId }) => {
  const selectedTab = React.useMemo(() => {
    return tabs.find((tab) => tab.id === selectedId);
  }, [selectedId]);

  return (
    <>
      <nav className={styles.nav}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => selectTab(tab.id)}
            className={cn(styles.navItem, {
              [styles.active]: tab.id === selectedId
            })}
          >
            {tab.id}
          </div>
        ))}
      </nav>
      {selectedTab.content}
    </>
  );
};

Tabs.propTypes = {
  selectTab: PropTypes.func.isRequired,
  selectedId: PropTypes.any.isRequired
};

export default React.memo(Tabs);
