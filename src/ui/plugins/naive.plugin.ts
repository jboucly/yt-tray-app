import {
    create,
    NButton,
    NConfigProvider,
    NIcon,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NLayoutSider,
    NMenu
} from 'naive-ui';

export const naive = create({
    components: [NButton, NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NIcon, NConfigProvider]
});
