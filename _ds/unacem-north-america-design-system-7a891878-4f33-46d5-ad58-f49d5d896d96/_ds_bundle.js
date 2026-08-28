/* @ds-bundle: {"format":4,"namespace":"UNACEMNorthAmericaDesignSystem_7a8918","components":[{"name":"CoBrandLockup","sourcePath":"components/brand/CoBrandLockup.jsx"},{"name":"Edifications","sourcePath":"components/brand/Edifications.jsx"},{"name":"Isotype","sourcePath":"components/brand/Isotype.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"StatFigure","sourcePath":"components/core/StatFigure.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"PaginationDots","sourcePath":"components/navigation/PaginationDots.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/CoBrandLockup.jsx":"957c767e721d","components/brand/Edifications.jsx":"b689f11fdd6b","components/brand/Isotype.jsx":"41c603a067db","components/brand/Logo.jsx":"7cbcac899643","components/core/Badge.jsx":"11cf92240e2b","components/core/Button.jsx":"f4e6c3820195","components/core/Card.jsx":"2f5bf75eb178","components/core/Eyebrow.jsx":"5ada9151418b","components/core/Rule.jsx":"2521173858ae","components/core/StatFigure.jsx":"bdf07fa9fceb","components/feedback/Dialog.jsx":"c2999e49474b","components/feedback/Notice.jsx":"ca2ab6c071bb","components/feedback/Tooltip.jsx":"1c6ce21ad420","components/forms/Checkbox.jsx":"be991ecb9355","components/forms/Input.jsx":"6c6bf63f9a3d","components/forms/Radio.jsx":"e06fb76c93fb","components/forms/Select.jsx":"b6f660cc6802","components/forms/Switch.jsx":"afb5f815f15a","components/forms/Textarea.jsx":"52c78ea02c72","components/navigation/Breadcrumb.jsx":"dff57b9579ac","components/navigation/PaginationDots.jsx":"a8e524b40472","components/navigation/Tabs.jsx":"9c4776ddffe5","ui_kits/brand-site/HomeScreen.jsx":"31e665d2764a","ui_kits/brand-site/OperationScreen.jsx":"c264890ce1de","ui_kits/brand-site/ProgramsScreen.jsx":"acc2a7d64adc","ui_kits/brand-site/SiteChrome.jsx":"a8f1dfdea700","ui_kits/internal-comms/BusinessCard.jsx":"83627d9ee4fe","ui_kits/internal-comms/EmailSignature.jsx":"2ba02fdbdf4f","ui_kits/internal-comms/InternalMemo.jsx":"242733d8c7d0","ui_kits/internal-comms/Letterhead.jsx":"1c0241d0d439","ui_kits/internal-comms/Totem.jsx":"fb9690e7ff1d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UNACEMNorthAmericaDesignSystem_7a8918 = window.UNACEMNorthAmericaDesignSystem_7a8918 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Edifications.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The "edifications" skyline device: 16 double-line building columns built from
 * the top of the isotype. Always upright, always anchored to the bottom edge.
 */
function Edifications({
  color = 'black',
  height = 160,
  align = 'left',
  assetBase = '/assets/graphics',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      height,
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      pointerEvents: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/edifications-' + color + '.svg',
    alt: "",
    style: {
      position: 'absolute',
      bottom: 0,
      height: '100%',
      width: 'auto',
      maxWidth: 'none',
      left: align === 'right' ? 'auto' : align === 'center' ? '50%' : 0,
      right: align === 'right' ? 0 : 'auto',
      transform: align === 'center' ? 'translateX(-50%)' : 'none',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Edifications });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Edifications.jsx", error: String((e && e.message) || e) }); }

// components/brand/Isotype.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The isotype — the brand's master shape. Use where the full lockup will not
 * fit: favicons, avatars, small-space and responsive applications.
 */
function Isotype({
  color = 'red',
  size = 48,
  assetBase = '/assets/logos',
  alt = 'UNACEM',
  style,
  ...rest
}) {
  const file = color === 'white' ? 'isotype-black.svg' : 'isotype-' + color + '.svg';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + '/' + file,
    alt: alt,
    style: {
      height: size,
      width: 'auto',
      minWidth: 16,
      display: 'block',
      borderRadius: 0,
      filter: color === 'white' ? 'invert(1)' : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Isotype });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Isotype.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ART = {
  horizontal: {
    red: 'logo-horizontal-red.svg',
    black: 'logo-horizontal-black.svg',
    white: 'logo-horizontal-white.svg'
  },
  vertical: {
    red: 'logo-vertical-red.svg',
    black: 'logo-vertical-black.svg',
    white: 'logo-vertical-white.svg'
  }
};
const MIN = {
  horizontal: 22,
  vertical: 38
};

/**
 * Official UNACEM North America lockup. Enforces the brandbook's clear-space
 * module (1 U on every side) and the minimum reproduction width.
 */
function Logo({
  orientation = 'horizontal',
  color = 'red',
  height = 40,
  clearSpace = false,
  assetBase = '/assets/logos',
  alt = 'UNACEM North America',
  style,
  ...rest
}) {
  const src = assetBase + '/' + ART[orientation][color];
  // The "U" module: cap height of the wordmark U, measured off the supplied art.
  const u = orientation === 'horizontal' ? height * 0.34 : height * 0.11;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: clearSpace ? u : 0,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height,
      width: 'auto',
      minWidth: MIN[orientation],
      display: 'block',
      borderRadius: 0
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/CoBrandLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Co-branding and endorsement lockup. UNACEM North America is always the axis:
 * it leads, and the U/2 module sets the gap and the divider position.
 *
 * Partner marks were not supplied as files, so the partner is set in Silka type.
 * Pass partnerMark once you have the real SVG.
 */
function CoBrandLockup({
  partner = 'DRAKE',
  partnerMark,
  mode = 'positive',
  height = 56,
  endorsement = false,
  assetBase = '/assets/logos',
  style,
  ...rest
}) {
  const single = mode !== 'positive';
  const logoColor = mode === 'positive' ? 'red' : 'white';
  const ink = mode === 'positive' ? 'var(--unacem-black)' : 'var(--unacem-white)';
  const u = height * 0.34;
  const bg = mode === 'negative' ? 'var(--unacem-red)' : mode === 'dark' ? 'var(--unacem-black)' : 'transparent';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: u / 2,
      background: bg,
      padding: mode === 'positive' ? 0 : u,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    orientation: "horizontal",
    color: logoColor,
    height: height,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: ink,
      opacity: single ? 0.55 : 0.28
    }
  }), partnerMark ? /*#__PURE__*/React.createElement("img", {
    src: partnerMark,
    alt: partner,
    style: {
      height: height * 0.72,
      width: 'auto',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 900,
      fontSize: height * 0.38,
      letterSpacing: '0.02em',
      lineHeight: 1,
      color: ink,
      textTransform: 'uppercase'
    }
  }, partner), endorsement && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: Math.max(9, height * 0.15),
      lineHeight: 1.3,
      color: ink,
      opacity: 0.75
    }
  }, "A UNACEM North America Company")));
}
Object.assign(__ds_scope, { CoBrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CoBrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square all-caps label. Used for programs, divisions and status.
 */
function Badge({
  tone = 'accent',
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: 'var(--unacem-red)',
      color: 'var(--unacem-white)'
    },
    dark: {
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      borderRadius: 0,
      padding: '6px 10px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '11px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: '13px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  borderRadius: 0,
  border: '0',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  textDecoration: 'none',
  transition: 'background-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
};
const SIZES = {
  md: {
    height: 'var(--control-height)',
    padding: '0 var(--space-4)'
  },
  sm: {
    height: 'var(--control-height-sm)',
    padding: '0 var(--space-3)',
    fontSize: '12px'
  }
};

/**
 * Flat, square, three-colour button. No radius, no shadow, no scale on press.
 * Label copy is written in brand voice — never "Learn more" or "Get started".
 */
function Button({
  variant = 'primary',
  size = 'md',
  onDark = false,
  disabled = false,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  let look;
  if (variant === 'primary') {
    look = {
      background: disabled ? 'var(--interactive-disabled)' : press ? 'var(--interactive-press)' : hover ? 'var(--interactive-hover)' : 'var(--unacem-red)',
      color: 'var(--unacem-white)'
    };
  } else if (variant === 'secondary') {
    const ink = onDark ? 'var(--unacem-white)' : 'var(--unacem-black)';
    look = {
      background: hover && !disabled ? ink : 'transparent',
      color: hover && !disabled ? onDark ? 'var(--unacem-black)' : 'var(--unacem-white)' : ink,
      boxShadow: 'inset 0 0 0 var(--border-width-strong) ' + ink,
      opacity: disabled ? 0.35 : 1
    };
  } else {
    look = {
      background: 'transparent',
      color: disabled ? 'var(--interactive-disabled)' : press ? 'var(--interactive-press)' : hover ? 'var(--interactive-hover)' : 'var(--unacem-red)',
      padding: 0,
      height: 'auto',
      boxShadow: 'inset 0 -2px 0 0 currentColor'
    };
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...BASE,
      ...SIZES[size],
      ...look,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A card is a flat block: white with a hairline, or a solid black / red field.
 * Zero radius, zero shadow, no left-border accent.
 */
function Card({
  tone = 'light',
  bar = false,
  children,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--unacem-white)',
      color: 'var(--unacem-black)',
      boxShadow: 'inset 0 0 0 1px var(--hairline)'
    },
    dark: {
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)'
    },
    accent: {
      background: 'var(--unacem-red)',
      color: 'var(--unacem-white)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: tone === 'dark' ? 'unacem-on-dark' : tone === 'accent' ? 'unacem-on-red' : undefined,
    style: {
      borderRadius: 0,
      padding: 'var(--space-4)',
      borderTop: bar ? 'var(--bar-width) solid var(--unacem-red)' : undefined,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * All-caps wide-tracked label above a heading, and the rotated vertical kicker
 * that sits in the left margin — the brand's signature margin label.
 */
function Eyebrow({
  orientation = 'horizontal',
  tone = 'muted',
  outline = false,
  children,
  style,
  ...rest
}) {
  const colors = {
    muted: 'var(--text-muted)',
    ink: 'var(--text-body)',
    accent: 'var(--unacem-red)'
  };
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        letterSpacing: '0.14em',
        whiteSpace: 'nowrap',
        fontSize: '16px',
        WebkitTextStroke: outline ? '1px ' + colors[tone] : undefined,
        color: outline ? 'transparent' : colors[tone],
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: colors[tone],
      display: 'block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thin single-colour divider, or the heavy red emphasis rule that sits under a
 * display line. Replaces every use of a shadow or a soft separator.
 */
function Rule({
  weight = 'hair',
  tone = 'default',
  width = '100%',
  style,
  ...rest
}) {
  const h = weight === 'heavy' ? 'var(--rule-width-heavy)' : weight === 'bar' ? 'var(--bar-width)' : 'var(--rule-width)';
  const colors = {
    default: 'var(--border-default)',
    strong: 'var(--border-strong)',
    accent: 'var(--unacem-red)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      width,
      height: h,
      background: colors[tone],
      border: 0,
      borderRadius: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/StatFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A highlighted figure. Digits are set in Baro Line Two — the only font
 * sanctioned for numerals — with a Silka label beneath.
 */
function StatFigure({
  value,
  label,
  size = 88,
  tone = 'accent',
  style,
  ...rest
}) {
  const colors = {
    accent: 'var(--unacem-red)',
    ink: 'var(--text-body)',
    inverse: 'var(--unacem-white)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-numeral)',
      fontSize: size,
      lineHeight: 0.95,
      color: colors[tone],
      letterSpacing: '0.01em'
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatFigure.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal. Square panel on a hard black scrim. The close control is a CSS cross
 * at 45 degrees; the brand has no icon set.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim-hard)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-4)',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--unacem-white)',
      color: 'var(--unacem-black)',
      borderRadius: 0,
      padding: 'var(--space-5)',
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 'var(--space-3)',
      right: 'var(--space-3)',
      width: 'var(--hit-min)',
      height: 'var(--hit-min)',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: '16px',
      height: '16px',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '7px',
      left: 0,
      width: '16px',
      height: '2px',
      background: 'var(--unacem-black)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '7px',
      left: 0,
      width: '16px',
      height: '2px',
      background: 'var(--unacem-black)',
      transform: 'rotate(-45deg)'
    }
  }))), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: '28px',
      lineHeight: 0.95,
      letterSpacing: '0.005em',
      margin: '0 var(--space-6) var(--space-3) 0'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--body-leading)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline message block. Flat field with an 8px red or black marker bar on the
 * left edge only when it is a full-width alert — never as decoration.
 */
function Notice({
  tone = 'info',
  title,
  children,
  style,
  ...rest
}) {
  const tones = {
    info: {
      background: 'var(--wash)',
      color: 'var(--unacem-black)',
      bar: 'var(--unacem-black)'
    },
    accent: {
      background: 'var(--unacem-red)',
      color: 'var(--unacem-white)',
      bar: 'var(--unacem-white)'
    },
    dark: {
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)',
      bar: 'var(--unacem-red)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      background: t.background,
      color: t.color,
      borderRadius: 0,
      padding: 'var(--space-3) var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 var(--bar-width)',
      width: 'var(--bar-width)',
      background: t.bar,
      alignSelf: 'stretch'
    }
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--body-leading)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square black tooltip. No radius, no shadow, no arrow. */
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: 0
  } : {
    bottom: 'calc(100% + 8px)',
    left: 0
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.4,
      padding: '8px 10px',
      whiteSpace: 'nowrap',
      borderRadius: 0,
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square checkbox. The check is two CSS borders at 45 degrees — no icon font.
 */
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--hit-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '22px',
      height: '22px',
      flex: '0 0 22px',
      background: checked ? 'var(--unacem-red)' : 'transparent',
      boxShadow: 'inset 0 0 0 2px ' + (checked ? 'var(--unacem-red)' : 'var(--border-strong)')
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '6px',
      top: '3px',
      width: '7px',
      height: '12px',
      borderRight: '2px solid var(--unacem-white)',
      borderBottom: '2px solid var(--unacem-white)',
      transform: 'rotate(45deg)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  height: 'var(--control-height)',
  padding: '0 var(--space-3)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-md)',
  color: 'var(--text-body)',
  background: 'var(--unacem-white)',
  border: 'var(--border-width) solid var(--border-strong)',
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
};

/**
 * Square text field with a 1px black keyline. Focus adds a red 2px outline;
 * invalid swaps the keyline to red.
 */
function Input({
  label,
  hint,
  invalid = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    "aria-invalid": invalid || undefined,
    style: {
      ...FIELD,
      borderColor: invalid ? 'var(--unacem-red)' : 'var(--border-strong)',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.outline = '2px solid var(--focus-ring)';
      e.currentTarget.style.outlineOffset = '2px';
    },
    onBlur: e => {
      e.currentTarget.style.outline = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--unacem-red)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio. Square, like everything else — the brand's radius is zero even here,
 * so the selected state is a solid red inset square, not a dot.
 */
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--hit-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '22px',
      height: '22px',
      flex: '0 0 22px',
      boxShadow: 'inset 0 0 0 2px var(--border-strong)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '10px',
      height: '10px',
      background: 'var(--unacem-red)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  height: 'var(--control-height)',
  padding: '0 var(--space-3)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-md)',
  color: 'var(--text-body)',
  background: 'var(--unacem-white)',
  border: 'var(--border-width) solid var(--border-strong)',
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
};

/**
 * Square select. The chevron is a CSS-drawn 45-degree corner — the brand has no
 * icon set, and its geometry is 90/45 degrees only.
 */
function Select({
  label,
  options = [],
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    style: {
      ...FIELD,
      appearance: 'none',
      paddingRight: '40px',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      width: '8px',
      height: '8px',
      marginTop: '-6px',
      borderRight: '2px solid var(--unacem-red)',
      borderBottom: '2px solid var(--unacem-red)',
      transform: 'rotate(45deg)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch. A square track with a square knob that slides — no pill, no radius.
 */
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--hit-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '48px',
      height: '24px',
      flex: '0 0 48px',
      background: checked ? 'var(--unacem-red)' : 'transparent',
      boxShadow: 'inset 0 0 0 2px ' + (checked ? 'var(--unacem-red)' : 'var(--border-strong)'),
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '4px',
      left: checked ? '28px' : '4px',
      width: '16px',
      height: '16px',
      background: checked ? 'var(--unacem-white)' : 'var(--unacem-black)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  height: 'var(--control-height)',
  padding: '0 var(--space-3)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-md)',
  color: 'var(--text-body)',
  background: 'var(--unacem-white)',
  border: 'var(--border-width) solid var(--border-strong)',
  borderRadius: 0,
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
};

/** Square multi-line field. Same keyline and focus behaviour as Input. */
function Textarea({
  label,
  hint,
  rows = 4,
  invalid = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--eyebrow-size)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    "aria-invalid": invalid || undefined,
    style: {
      ...FIELD,
      height: 'auto',
      padding: 'var(--space-3)',
      lineHeight: 'var(--body-leading)',
      resize: 'vertical',
      borderColor: invalid ? 'var(--unacem-red)' : 'var(--border-strong)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb. The separator is a slash — the brandbook uses "/" and "·" in its
 * own page furniture rather than a chevron icon.
 */
function Breadcrumb({
  items = [],
  onDark = false,
  style,
  ...rest
}) {
  const muted = onDark ? 'var(--on-dark-muted)' : 'var(--text-muted)';
  const ink = onDark ? 'var(--unacem-white)' : 'var(--unacem-black)';
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? undefined : it.href;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: muted,
        fontSize: 'var(--text-xs)'
      }
    }, "/"), last || !href ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'var(--eyebrow-size)',
        letterSpacing: 'var(--eyebrow-tracking)',
        textTransform: 'uppercase',
        color: ink
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'var(--eyebrow-size)',
        letterSpacing: 'var(--eyebrow-tracking)',
        textTransform: 'uppercase',
        color: muted,
        textDecoration: 'none',
        border: 0
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PaginationDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Slide / carousel position marker. Squares, not dots — the brand has no
 * circles outside the isotype.
 */
function PaginationDots({
  count = 3,
  index = 0,
  onSelect,
  onDark = false,
  style,
  ...rest
}) {
  const idle = onDark ? 'var(--hairline-inverse-strong)' : 'var(--hairline-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center',
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": 'Go to ' + (i + 1),
    "aria-current": i === index || undefined,
    onClick: () => onSelect && onSelect(i),
    style: {
      width: i === index ? '28px' : '10px',
      height: '4px',
      background: i === index ? 'var(--unacem-red)' : idle,
      border: 0,
      borderRadius: 0,
      padding: 0,
      cursor: 'pointer',
      transition: 'width var(--duration-fast) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { PaginationDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PaginationDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs. The active tab is marked by a 4px red rule, never a pill or a fill.
 */
function Tabs({
  items = [],
  value,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  const ink = onDark ? 'var(--unacem-white)' : 'var(--unacem-black)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid ' + (onDark ? 'var(--hairline-inverse)' : 'var(--hairline)'),
      ...style
    }
  }, rest), items.map(it => {
    const key = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(key),
      style: {
        background: 'transparent',
        border: 0,
        borderRadius: 0,
        cursor: 'pointer',
        padding: '0 0 var(--space-3)',
        marginBottom: '-1px',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 'var(--eyebrow-size)',
        letterSpacing: 'var(--eyebrow-tracking)',
        textTransform: 'uppercase',
        color: active ? ink : onDark ? 'var(--on-dark-muted)' : 'var(--text-muted)',
        boxShadow: active ? 'inset 0 -4px 0 0 var(--unacem-red)' : 'none',
        minHeight: 'var(--hit-min)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/HomeScreen.jsx
try { (() => {
const {
  Eyebrow,
  Rule,
  Button,
  Card,
  StatFigure,
  Badge,
  Edifications,
  CoBrandLockup
} = typeof window !== "undefined" && window.DS || {};
const VALUES = [['Cooperation', 'We work together as a team, promoting an environment of trust where everyone\u2019s opinions and efforts are valued.'], ['Health and safety', 'We are all responsible for creating a safe and healthy environment because life comes first.'], ['Sustainability', 'We create economic, environmental and social value in our operations, building a better world for future generations.'], ['Customer centricity', 'We put our customers at the heart of our actions, anticipating their needs with sustainable solutions.']];
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'url(../../assets/photography/people-1-web.jpg) center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "unacem-on-dark",
    style: {
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)',
      padding: '80px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Our brand purpose"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 58,
      lineHeight: 0.92,
      letterSpacing: '0.005em',
      margin: '24px 0 22px'
    }
  }, "TOGETHER WE", /*#__PURE__*/React.createElement("br", null), "GROW TO BUILD", /*#__PURE__*/React.createElement("br", null), "A ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--unacem-red)'
    }
  }, "SUSTAINABLE"), /*#__PURE__*/React.createElement("br", null), "WORLD"), /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy",
    tone: "accent",
    width: 110
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      marginTop: 26,
      maxWidth: '40ch'
    }
  }, "Cement, concrete, aggregates and energy across the U.S. Southwest \u2014 part of a Peruvian industrial group with more than 100 years of operating history."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('operation')
  }, "See how we build"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onDark: true,
    onClick: () => onNavigate('programs')
  }, "Meet our people")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: "100+",
    label: "Years of legacy",
    size: 72
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "5",
    label: "Countries",
    size: 72
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "2",
    label: "North American operations",
    size: 72
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "3",
    label: "Divisions",
    size: 72
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 48px 64px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Operations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 46,
      lineHeight: 0.92,
      margin: '18px 0 32px'
    }
  }, "WHERE WE WORK"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, [['Drake', 'Arizona', 'drakeus.com', '../../assets/photography/plant-aerial-web.jpg'], ['Tehachapi Cement', 'California', 'A UNACEM North America Company', '../../assets/photography/people-1-web.jpg']].map(([n, place, meta, img]) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onNavigate('operation'),
    style: {
      padding: 0,
      border: 0,
      background: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      background: 'url(' + img + ') center/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      boxShadow: 'inset 0 0 0 1px var(--hairline)',
      borderTop: '8px solid var(--unacem-red)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 26,
      letterSpacing: '0.02em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, place, " \xB7 ", meta)))))), /*#__PURE__*/React.createElement("section", {
    className: "unacem-on-dark",
    style: {
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)',
      padding: '72px 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "02.1 Corporate values"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 46,
      lineHeight: 0.92,
      margin: '18px 0 36px',
      color: 'var(--unacem-white)'
    }
  }, "WHAT WE HOLD TO"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, VALUES.map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: '8px solid var(--unacem-red)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--on-dark-muted)',
      marginTop: 12
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Internal programs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 42,
      lineHeight: 0.92,
      margin: '18px 0 20px'
    }
  }, "THE PLANTS ARE THE STAGE;", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--unacem-red)'
    }
  }, "THE PEOPLE ARE THE STORY.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      maxWidth: '44ch'
    }
  }, "Life First is our health and safety program. Talent 2Grow is how we develop the people who run the plants."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Life First"), /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, "Talent 2Grow"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CoBrandLockup, {
    assetBase: "../../assets/logos",
    partner: "LIFE FIRST",
    height: 40
  }), /*#__PURE__*/React.createElement(CoBrandLockup, {
    assetBase: "../../assets/logos",
    partner: "TALENT 2GROW",
    height: 40
  }))));
}
if (typeof window !== "undefined") window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/OperationScreen.jsx
try { (() => {
const {
  Eyebrow,
  Rule,
  Button,
  Breadcrumb,
  Tabs,
  StatFigure,
  Notice,
  CoBrandLockup,
  Edifications
} = typeof window !== "undefined" && window.DS || {};
function OperationScreen() {
  const [tab, setTab] = React.useState('overview');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 48px 0'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Operations',
      href: '#'
    }, {
      label: 'California',
      href: '#'
    }, 'Tehachapi Cement']
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '28px 48px 0',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 56,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Tehachapi, California"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 64,
      lineHeight: 0.92,
      letterSpacing: '0.005em',
      margin: '20px 0 20px'
    }
  }, "TEHACHAPI", /*#__PURE__*/React.createElement("br", null), "CEMENT"), /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy",
    tone: "accent",
    width: 110
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      marginTop: 24,
      maxWidth: '42ch'
    }
  }, "A cement plant in the Tehachapi Pass, supplying the California market. Operated as a UNACEM North America company.")), /*#__PURE__*/React.createElement(CoBrandLockup, {
    assetBase: "../../assets/logos",
    partner: "TEHACHAPI CEMENT",
    height: 44,
    endorsement: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '40px 0 0',
      height: 420,
      background: 'url(../../assets/photography/people-1-web.jpg) center/cover'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'safety',
      label: 'Health and safety'
    }, {
      value: 'sustainability',
      label: 'Sustainability'
    }],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 0 64px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, tab === 'overview' && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: '60ch'
    }
  }, "The plant sits where the desert meets the pass, alongside the wind corridor. Production, quality control and dispatch run on the same site, and the crews that run them live in the communities the plant supplies."), tab === 'safety' && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: '60ch'
    }
  }, "Life First governs every shift on site. Personal protective equipment is mandatory past the gate, and every visitor is inducted before entering the operating area."), tab === 'sustainability' && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: '60ch'
    }
  }, "We create economic, environmental and social value in our operations, focusing on the continuous improvement of our processes and making them more efficient every day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    title: "Life First",
    tone: "dark"
  }, "Hard hats, hi-vis and eye protection are required past the gate. No exceptions, for anyone.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Read the safety commitment"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Talk to our team"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(StatFigure, {
    value: "1",
    label: "Cement plant",
    size: 56,
    tone: "ink"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "2026",
    label: "Board visit",
    size: 56,
    tone: "ink"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "100+",
    label: "Group legacy",
    size: 56,
    tone: "accent"
  }), /*#__PURE__*/React.createElement(StatFigure, {
    value: "5",
    label: "Countries",
    size: 56,
    tone: "accent"
  })))));
}
if (typeof window !== "undefined") window.OperationScreen = OperationScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/OperationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/ProgramsScreen.jsx
try { (() => {
const {
  Eyebrow,
  Rule,
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  Card,
  Badge,
  Dialog,
  Edifications
} = typeof window !== "undefined" && window.DS || {};
function ProgramsScreen() {
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "unacem-on-red",
    style: {
      background: 'var(--unacem-red)',
      color: 'var(--unacem-white)',
      padding: '72px 48px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      gap: 44,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      letterSpacing: '0.14em',
      whiteSpace: 'nowrap',
      fontSize: 16,
      WebkitTextStroke: '1px var(--unacem-white)',
      color: 'transparent'
    }
  }, "PEOPLE FIRST"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "ink",
    style: {
      color: 'var(--unacem-white)'
    }
  }, "08 Internal programs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 60,
      lineHeight: 0.92,
      letterSpacing: '0.005em',
      margin: '22px 0 20px',
      color: 'var(--unacem-white)'
    }
  }, "THE PLANTS ARE THE STAGE;", /*#__PURE__*/React.createElement("br", null), "THE PEOPLE ARE THE STORY."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: '48ch',
      color: 'var(--unacem-white)'
    }
  }, "We take our development into our own hands amidst a challenging environment, strengthening our individual and collective growth."))), /*#__PURE__*/React.createElement(Edifications, {
    assetBase: "../../assets/graphics",
    color: "white",
    height: 240,
    align: "right",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '45%',
      opacity: 0.28,
      zIndex: 0
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, [['Life First', 'Health and safety', 'We are all responsible for creating a safe and healthy environment because life comes first. Every operation, every shift, every visitor.'], ['Talent 2Grow', 'Human development', 'We take our development into our own hands, strengthening individual and collective growth across every operation.']].map(([n, k, b]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    bar: true,
    style: {
      padding: '32px 34px'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 34,
      lineHeight: 0.95,
      margin: '20px 0 16px'
    }
  }, n), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Read the commitment"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 48px 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Work with us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 42,
      lineHeight: 0.92,
      margin: '18px 0 18px'
    }
  }, "TELL US WHERE", /*#__PURE__*/React.createElement("br", null), "YOU WANT TO BUILD"), /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy",
    tone: "accent",
    width: 100
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      marginTop: 22,
      maxWidth: '42ch',
      color: 'var(--text-muted)'
    }
  }, "We write our roles without distinction of sex or gender, and we address every applicant without bias.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Maria Cincis",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work e-mail",
    type: "email",
    placeholder: "name@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Operation of interest",
    options: ['Drake — Arizona', 'Tehachapi Cement — California', 'Either']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "What would you like to build with us?",
    rows: 4
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I have read the health and safety commitment",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: !agree
  }, "Send it to our team")))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: () => setSent(false),
    title: "Thank you",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Close")
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Your message is with the Corporate Affairs team. We answer every application.")));
}
if (typeof window !== "undefined") window.ProgramsScreen = ProgramsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/ProgramsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/SiteChrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Eyebrow,
  Rule,
  Edifications,
  CoBrandLockup
} = typeof window !== "undefined" && window.DS || {};
const NAV = [{
  value: 'home',
  label: 'Home'
}, {
  value: 'operation',
  label: 'Operations'
}, {
  value: 'programs',
  label: 'Our people'
}];
function SiteHeader({
  view,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--unacem-white)',
      boxShadow: 'inset 0 -1px 0 0 var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      padding: '0 48px',
      height: 88
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      marginLeft: 24
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.value,
    onClick: () => onNavigate(n.value),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '8px 0',
      minHeight: 'var(--hit-min)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: view === n.value ? 'var(--unacem-black)' : 'var(--text-muted)',
      boxShadow: view === n.value ? 'inset 0 -4px 0 0 var(--unacem-red)' : 'none'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "sm"
  }, "Espa\xF1ol"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Talk to our team"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "unacem-on-dark",
    style: {
      background: 'var(--unacem-black)',
      color: 'var(--unacem-white)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
      gap: 40,
      padding: '64px 48px 40px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    color: "white",
    height: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--on-dark-muted)',
      marginTop: 22,
      maxWidth: '30ch'
    }
  }, "Together we grow to build a sustainable world.")), [['Operations', ['Drake', 'Tehachapi Cement']], ['Divisions', ['UNA Cement', 'UNA Readymix', 'UNA Aggregates']], ['Our people', ['Life First', 'Talent 2Grow']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--unacem-white)',
      textDecoration: 'none',
      border: 0
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 26px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 18,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "A UNACEM North America Company"), /*#__PURE__*/React.createElement("span", null, "grupounacem.com"))), /*#__PURE__*/React.createElement(Edifications, {
    assetBase: "../../assets/graphics",
    color: "red",
    height: 200,
    align: "right",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '50%',
      opacity: 0.35,
      zIndex: 0
    }
  }));
}
if (typeof window !== "undefined") {
  window.SiteHeader = SiteHeader;
  window.SiteFooter = SiteFooter;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal-comms/BusinessCard.jsx
try { (() => {
const {
  Logo,
  Isotype,
  Edifications
} = typeof window !== "undefined" && window.DS || {};

/** 9 x 5.5 cm business card, front and two backs (brandbook 13.3 A). */
function BusinessCard({
  person = {
    name: 'MARIA CINCIS',
    title: 'HR Manager | Tehachapi Cement',
    mobile: 'm. (661) 300-1473',
    web: 'www.grupounacem.com'
  }
}) {
  const W = 340,
    H = 208;
  const card = {
    width: W,
    height: H,
    position: 'relative',
    overflow: 'hidden',
    flex: '0 0 auto'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      background: '#fff',
      boxShadow: 'inset 0 0 0 1px var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    height: 26,
    style: {
      position: 'absolute',
      left: 24,
      top: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 17,
      letterSpacing: '0.02em'
    }
  }, person.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      marginTop: 6
    }
  }, person.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--text-muted)',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, person.mobile, /*#__PURE__*/React.createElement("br", null), person.web))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      background: 'var(--unacem-red)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    orientation: "vertical",
    color: "white",
    height: 74,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      background: 'var(--unacem-black)'
    }
  }, /*#__PURE__*/React.createElement(Edifications, {
    assetBase: "../../assets/graphics",
    color: "red",
    height: H,
    align: "center",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement(Isotype, {
    assetBase: "../../assets/logos",
    size: 64,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    }
  })));
}
if (typeof window !== "undefined") window.BusinessCard = BusinessCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal-comms/BusinessCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal-comms/EmailSignature.jsx
try { (() => {
const {
  Logo,
  Rule
} = typeof window !== "undefined" && window.DS || {};

/** 700 x 162 digital signature (brandbook 13.5). Chaney 28pt / Silka Bold 22pt / Silka Regular 20pt. */
function EmailSignature({
  variant = 'light'
}) {
  const dark = variant === 'dark';
  const red = variant === 'red';
  const bg = dark ? 'var(--unacem-black)' : red ? 'var(--unacem-red)' : '#fff';
  const ink = dark || red ? '#fff' : 'var(--unacem-black)';
  const muted = dark || red ? 'rgba(255,255,255,.75)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 700,
      height: 162,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      padding: '0 28px',
      boxSizing: 'border-box',
      boxShadow: variant === 'light' ? 'inset 0 0 0 1px var(--hairline)' : 'none',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    orientation: "vertical",
    color: dark || red ? 'white' : 'red',
    height: 104
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 104,
      background: ink,
      opacity: 0.28
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 23,
      letterSpacing: '0.02em',
      color: ink,
      lineHeight: 1
    }
  }, "SARAH LOPEZ"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: ink,
      marginTop: 9
    }
  }, "Compliance Specialist"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: muted,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "M: +1 (602) 448-7704", /*#__PURE__*/React.createElement("br", null), "www.drakeus.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy",
    tone: dark || red ? 'strong' : 'accent',
    width: 54,
    style: {
      marginLeft: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: muted,
      marginTop: 10,
      lineHeight: 1.5
    }
  }, "A UNACEM", /*#__PURE__*/React.createElement("br", null), "North America", /*#__PURE__*/React.createElement("br", null), "Company")));
}
if (typeof window !== "undefined") window.EmailSignature = EmailSignature;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal-comms/EmailSignature.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal-comms/InternalMemo.jsx
try { (() => {
const {
  Logo,
  Edifications,
  Eyebrow,
  Rule
} = typeof window !== "undefined" && window.DS || {};

/** A4 internal communication, 595 x 841 (brandbook 13.4). */
function InternalMemo({
  name = 'ALICIA CAMPOS',
  role = 'Finance Director',
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 595,
      height: 841,
      background: '#fff',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 96,
      background: 'var(--unacem-black)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    color: "white",
    height: 30,
    style: {
      position: 'absolute',
      left: 40,
      top: 33
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    style: {
      position: 'absolute',
      right: 40,
      top: 41,
      color: 'rgba(255,255,255,.7)'
    }
  }, "Internal communication")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 40px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Welcome"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: 46,
      lineHeight: 0.92,
      letterSpacing: '0.005em',
      margin: '18px 0 14px'
    }
  }, name), /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy",
    tone: "accent",
    width: 92
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 24,
      maxWidth: '46ch'
    }
  }, body || 'We are pleased to inform you that as of January 1, 2026, ' + name.split(' ').map(w => w[0] + w.slice(1).toLowerCase()).join(' ') + ' joins UNACEM North America as ' + role + ', reporting to the Chief Financial Officer.'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: '46ch',
      color: 'var(--text-muted)'
    }
  }, "Please join us in making her welcome. Together we grow to build a sustainable world."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--unacem-red)',
      color: '#fff',
      padding: '7px 11px',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, "Talent 2Grow"), /*#__PURE__*/React.createElement("span", {
    style: {
      boxShadow: 'inset 0 0 0 1px var(--unacem-black)',
      padding: '7px 11px',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, "Human development"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 180,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Edifications, {
    assetBase: "../../assets/graphics",
    color: "red",
    height: 180,
    align: "right"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      bottom: 26,
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "595 \xD7 841 px \xB7 A4"));
}
if (typeof window !== "undefined") window.InternalMemo = InternalMemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal-comms/InternalMemo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal-comms/Letterhead.jsx
try { (() => {
const {
  Logo,
  Rule
} = typeof window !== "undefined" && window.DS || {};

/** A4 letterhead, two variants (brandbook 13.3 A.1 / A.2). */
function Letterhead() {
  const sheet = {
    width: 420,
    height: 594,
    background: '#fff',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 0 1px var(--hairline)',
    fontFamily: 'var(--font-body)'
  };
  const rule = {
    position: 'absolute',
    left: 34,
    right: 34,
    height: 1,
    background: 'var(--hairline)'
  };
  const lines = [0, 1, 2, 3, 4, 5, 6].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 9,
      background: 'var(--wash)',
      width: i % 3 === 2 ? '62%' : '100%',
      marginBottom: 11
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sheet
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    height: 22,
    style: {
      position: 'absolute',
      left: 34,
      top: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rule,
      top: 78
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 34,
      right: 34,
      top: 120
    }
  }, lines), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 34,
      right: 34,
      bottom: 44
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    weight: "heavy",
    tone: "accent",
    width: 70
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "UNACEM Corp S.A.A."), /*#__PURE__*/React.createElement("span", null, "www.grupounacem.com")))), /*#__PURE__*/React.createElement("div", {
    style: sheet
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 64,
      background: 'var(--unacem-red)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    color: "white",
    height: 22,
    style: {
      position: 'absolute',
      left: 34,
      top: 21
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 34,
      right: 34,
      top: 110
    }
  }, lines), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 20,
      background: 'var(--unacem-black)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 34,
      bottom: 38,
      fontSize: 8,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "unacem.com")));
}
if (typeof window !== "undefined") window.Letterhead = Letterhead;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal-comms/Letterhead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal-comms/Totem.jsx
try { (() => {
const {
  Logo,
  Edifications,
  CoBrandLockup
} = typeof window !== "undefined" && window.DS || {};

/** Event totem (brandbook 12). Vertical banner for corporate events. */
function Totem() {
  const t = {
    width: 196,
    height: 520,
    position: 'relative',
    overflow: 'hidden',
    flex: '0 0 auto'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...t,
      background: 'var(--unacem-red)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    orientation: "vertical",
    color: "white",
    height: 116,
    style: {
      position: 'absolute',
      left: '50%',
      top: 56,
      transform: 'translateX(-50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      top: 230,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 26,
      lineHeight: 0.92,
      color: '#fff'
    }
  }, "UNITED WE GO FURTHER"), /*#__PURE__*/React.createElement(Edifications, {
    assetBase: "../../assets/graphics",
    color: "white",
    height: 150,
    align: "center",
    style: {
      position: 'absolute',
      bottom: 0,
      opacity: 0.35
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...t,
      background: 'var(--unacem-black)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    assetBase: "../../assets/logos",
    orientation: "vertical",
    color: "white",
    height: 116,
    style: {
      position: 'absolute',
      left: '50%',
      top: 56,
      transform: 'translateX(-50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      top: 230,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 26,
      lineHeight: 0.92,
      color: '#fff'
    }
  }, "WE JOIN YOUR ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--unacem-red)'
    }
  }, "PROJECTS")), /*#__PURE__*/React.createElement(Edifications, {
    assetBase: "../../assets/graphics",
    color: "red",
    height: 150,
    align: "center",
    style: {
      position: 'absolute',
      bottom: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...t,
      background: '#fff',
      boxShadow: 'inset 0 0 0 1px var(--hairline)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CoBrandLockup, {
    assetBase: "../../assets/logos",
    partner: "DRAKE",
    height: 26,
    endorsement: true,
    style: {
      flexDirection: 'column'
    }
  }), /*#__PURE__*/React.createElement(CoBrandLockup, {
    assetBase: "../../assets/logos",
    partner: "TEHACHAPI",
    height: 26,
    endorsement: true,
    style: {
      flexDirection: 'column'
    }
  }))));
}
if (typeof window !== "undefined") window.Totem = Totem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal-comms/Totem.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CoBrandLockup = __ds_scope.CoBrandLockup;

__ds_ns.Edifications = __ds_scope.Edifications;

__ds_ns.Isotype = __ds_scope.Isotype;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.StatFigure = __ds_scope.StatFigure;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.PaginationDots = __ds_scope.PaginationDots;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
