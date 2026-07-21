import logoGmaps from "../logo/gmaps.png"

export class LogoGmapsControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img
                src = "${logoGmaps}"
                alt = "Logo Gmaps"
                style = "width: 50px"
            >
        `
        return this._container;
    }

    onRemove() {
        this._container.remove();
        this._map = undefined;
    }
}