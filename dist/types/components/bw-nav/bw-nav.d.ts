import ILink from '../../models/ILink';
export declare class BwNav {
    links: Array<ILink>;
    mg: string;
    pd: string;
    homeLink: ILink;
    navLinks: Array<ILink>;
    componentWillLoad(): void;
    render(): any;
}
