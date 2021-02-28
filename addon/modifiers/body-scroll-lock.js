import { modifier } from 'ember-modifier';
import { getOwner } from '@ember/application';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default modifier(function bodyScrollLock(element, _, options) {
  const owner = getOwner(this);
  const fastboot = owner.lookup('service:fastboot');
  if (fastboot && fastboot.isFastBoot) {
    return;
  }
  disableBodyScroll(element, options);
  return () => enableBodyScroll(element);
});
