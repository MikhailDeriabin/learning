export enum PanelFormName {
    initial = 'initial',
    annual = 'annual',
    expected = 'expected',
    duration = 'duration',
}

export type PanelForm = {
    [PanelFormName.initial]: string;
    [PanelFormName.annual]: string;
    [PanelFormName.expected]: string;
    [PanelFormName.duration]: string;
}

export type ParsedPanelForm = {
    [PanelFormName.initial]: number;
    [PanelFormName.annual]: number;
    [PanelFormName.expected]: number;
    [PanelFormName.duration]: number;
}