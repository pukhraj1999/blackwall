export declare class BwCard {
    tagColors: string[];
    imgSrc: string;
    imgAlt: string;
    name: string;
    description: string;
    descriptionLength: number;
    tagTitle: string;
    tags: string[];
    Link: string;
    componentWillLoad(): void;
    getColorForTag(index: number): string;
    render(): any;
}
