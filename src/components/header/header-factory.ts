function HeaderFactory(data: any) {
    const topNavList: any = []

    data.forEach((item: any) => {
        const singleNav: any = {}
        singleNav["label"] = item.label
        singleNav["path"] = item.path
        singleNav["icon"] = item.icon
        singleNav["children"] = item.children.map((i: any) => ({
            "label": i.label,
            "sublabel": i.sublabel,
            "path": i.path,
            "icon": i.icon
        }))

        topNavList.push(singleNav)
    })

    return topNavList;
}

export default HeaderFactory