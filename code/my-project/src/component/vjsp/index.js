import VwButton from "./button";
import VwTabs from "./tabs";
import VwEmpty from "./empty";
import VwModal from './modal';
import VwIcon from './icons';
import VwCascade from './cascade';
import VwCityPicker from './cityPicker';
import VwUpload from './upload';
import VwSkeleton from './skeleton';
import VwTag from './tags';
import VwSwipeAction from './swipeAction';
import VwCollapse from './collapse';

import Dialog from './dialog'
const components = [VwButton, VwTabs, VwEmpty, VwModal, VwIcon, VwCascade, VwCityPicker, VwUpload, VwSkeleton, VwTag, VwSwipeAction, VwCollapse];

const install = function (Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
        console.log(component.name)
    });

    Vue.prototype.$alert = Dialog.Alert;
    Vue.prototype.$confirm = Dialog.Confirm;
    Vue.prototype.$loading = Dialog.Loading;
    Vue.prototype.$toast = Dialog.Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '1.0.0',
    install,
    VwButton,
    VwTabs,
    VwEmpty,
    VwModal,
    VwIcon,
    VwCascade,
    VwCityPicker,
    VwUpload,
    VwSkeleton,
    VwTag,
    VwSwipeAction,
    VwCollapse
}