import ILink from '../../models/ILink';
export declare class BwNav {
    links: Array<ILink>;
    isModalOpen: boolean;
    mg: string;
    pd: string;
    homeLink: ILink;
    navLinks: Array<ILink>;
    componentWillLoad(): void;
    private openModal;
    render(): any;
}
