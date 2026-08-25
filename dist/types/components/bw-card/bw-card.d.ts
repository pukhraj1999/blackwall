export declare class BwCard {
    setPopulate: boolean;
    setDescription: string;
    tagColors: string[];
    populate: boolean;
    imgSrc: string;
    imgAlt: string;
    showBtn: boolean;
    name: string;
    description: string;
    descriptionLength: number;
    tagTitle: string;
    tags: string[];
    link: string;
    componentWillLoad(): void;
    getColorForTag(index: number): string;
    render(): any;
}
