export const primary = {
  primary: {
    "&:not(:disabled)": {
      backgroundColor: "var(--nvo-primary)",
      color: "var(--nvo-white)",
      border: "none",
      "&:hover": {
        backgroundColor: "var(--nvo-button-primary-bg-hover)",
      },
      "&:active": {
        backgroundColor: "var(--nvo-button-primary-bg-active)",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-outline))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-outline))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-button-disabled-bg)",
      color: "var(--nvo-white)",
      border: "none",
    },
  },
  "outline-primary": {
    "&:not(:disabled)": {
      backgroundColor: "var(--nvo-white)",
      color: "var(--nvo-primary)",
      border: "1px solid var(--nvo-primary)",
      "&:hover": {
        backgroundColor:
          "rgba(var(--nvo-primary-rgb), var(--nvo-opacity-transparent))",
      },
      "&:active": {
        backgroundColor: "rgba(var(--nvo-primary-rgb), 0.2)",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-primary-rgb), var(--nvo-opacity-outline))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-primary-rgb), var(--nvo-opacity-outline))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      border: "1px solid var(--nvo-button-default-border)",
      color: "var(--nvo-gray-200)",
    },
  },
  "ghost-primary": {
    "&:not(:disabled)": {
      backgroundColor: "transparent",
      color: "var(--nvo-primary)",
      border: "none",
      "&:hover": {
        backgroundColor:
          "rgba(var(--nvo-primary-rgb), var(--nvo-opacity-transparent))",
      },
      "&:active": {
        backgroundColor: "rgba(var(--nvo-primary-rgb), 0.2)",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-outline))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-primary-outline-rgb), var(--nvo-opacity-outline))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      color: "var(--nvo-button-disabled-bg)",
      border: "none",
    },
  },
};

export const secondary = {
  secondary: {
    "&:not(:disabled)": {
      backgroundColor: "var(--nvo-gray-900)",
      color: "var(--nvo-white)",
      border: "none",
      "&:hover": {
        backgroundColor: "greydark04",
      },
      "&:active": {
        backgroundColor: "var(--nvo-gray-900)",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-secondary-outline-rgb), var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-secondary-outline-rgb), var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-gray-200)",
      color: "var(--nvo-white)",
      border: "none",
    },
  },
  "outline-secondary": {
    "&:not(:disabled)": {
      backgroundColor: "greylight03",
      color: "var(--nvo-gray-900)",
      border: "1px solid #3C4D5F",
      "&:hover": {
        backgroundColor: "var(--nvo-gray-200)",
      },
      "&:active": {
        backgroundColor: "var(--nvo-gray-400)",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-secondary-outline-rgb),var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-secondary-outline-rgb),var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      border: "1px solid var(--nvo-button-default-border)",
      color: "var(--nvo-gray-200)",
    },
  },
  "ghost-secondary": {
    "&:not(:disabled)": {
      backgroundColor: "transparent",
      color: "var(--nvo-gray-900)",
      border: "none",
      "&:hover": {
        backgroundColor: "var(--nvo-gray-200)",
      },
      "&:active": {
        backgroundColor: "var(--nvo-gray-400)",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-secondary-outline-rgb),var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(var(--nvo-button-secondary-outline-rgb),var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      color: "var(--nvo-gray-200)",
      border: "none",
    },
  },
};

export const danger = {
  danger: {
    "&:not(:disabled)": {
      backgroundColor: "red09",
      color: "var(--nvo-white)",
      border: "none",
      "&:hover": {
        backgroundColor: `red10`,
      },
      "&:active": {
        backgroundColor: "#9e2828",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(247,181,174,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(247,181,174,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-gray-200)",
      color: "var(--nvo-white)",
      border: "none",
    },
  },
  "outline-danger": {
    "&:not(:disabled)": {
      backgroundColor: "grey01",
      color: "red09",
      border: "1px solid #d63939",
      "&:hover": {
        backgroundColor: "red01",
      },
      "&:active": {
        backgroundColor: "red03",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(247,181,174,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(247,181,174,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      border: "1px solid var(--nvo-button-default-border)",
      color: "var(--nvo-gray-200)",
    },
  },
  "ghost-danger": {
    "&:not(:disabled)": {
      backgroundColor: "transparent",
      color: "red09",
      border: "none",
      "&:hover": {
        backgroundColor: "red01",
      },
      "&:active": {
        backgroundColor: "red03",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(247,181,174,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(247,181,174,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      color: "var(--nvo-gray-200)",
      border: "none",
    },
  },
};

export const success = {
  success: {
    "&:not(:disabled)": {
      backgroundColor: "green09",
      color: "var(--nvo-white)",
      border: "none",
      "&:hover": {
        backgroundColor: `#279b3a`,
      },
      "&:active": {
        backgroundColor: "green10",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(181,226,182,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(181,226,182,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-gray-200)",
      color: "var(--nvo-white)",
      border: "none",
    },
  },
  "outline-success": {
    "&:not(:disabled)": {
      backgroundColor: "grey01",
      color: "green09",
      border: "1px solid #2fb344",
      "&:hover": {
        backgroundColor: "green01",
      },
      "&:active": {
        backgroundColor: "green03",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(181,226,182,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(181,226,182,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      border: "1px solid var(--nvo-button-default-border)",
      color: "var(--nvo-gray-200)",
    },
  },
  "ghost-success": {
    "&:not(:disabled)": {
      backgroundColor: "transparent",
      color: "green09",
      border: "none",
      "&:hover": {
        backgroundColor: "green01",
      },
      "&:active": {
        backgroundColor: "green03",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(181,226,182,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(181,226,182,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      color: "var(--nvo-gray-200)",
      border: "none",
    },
  },
};

export const warning = {
  warning: {
    "&:not(:disabled)": {
      backgroundColor: "orange09",
      color: "var(--nvo-white)",
      border: "none",
      "&:hover": {
        backgroundColor: `orange10`,
      },
      "&:active": {
        backgroundColor: "#be6701",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(255,211,176,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(255,211,176,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-gray-200)",
      color: "var(--nvo-white)",
      border: "none",
    },
  },
  "outline-warning": {
    "&:not(:disabled)": {
      backgroundColor: "grey01",
      color: "orange09",
      border: "1px solid #ff8c02",
      "&:hover": {
        backgroundColor: "orange01",
      },
      "&:active": {
        backgroundColor: "orange03",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(255,211,176,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(255,211,176,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      border: "1px solid var(--nvo-button-default-border)",
      color: "var(--nvo-gray-200)",
    },
  },
  "ghost-warning": {
    "&:not(:disabled)": {
      backgroundColor: "transparent",
      color: "orange09",
      border: "none",
      "&:hover": {
        backgroundColor: "orange01",
      },
      "&:active": {
        backgroundColor: "orange03",
      },
      "&:visited": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(255,211,176,var(--nvo-opacity-transparent))`,
      },
      "&:focus": {
        outline: "none",
        boxShadow: `0 0 0 4px rgba(255,211,176,var(--nvo-opacity-transparent))`,
      },
    },
    "&:disabled": {
      backgroundColor: "var(--nvo-white)",
      color: "var(--nvo-gray-200)",
      border: "none",
    },
  },
};
