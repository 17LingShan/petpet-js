import './template-selector.css'
import {Loading} from "../utils/ui"
import {TemplateModalSelector} from "./template-modal-selector"
import {PetpetTemplate} from "../../core/model/petpet-model";
import {createTitle} from "../utils";
import {getLangConfig} from "../lang/lang-loader";

export class TemplateSelector {
    #element: HTMLDivElement = document.createElement('div')
    #modal: TemplateModalSelector
    loading: Loading = new Loading(this.#element)
    #onChangeCallback
    template

    constructor(templates?: PetpetTemplate[]) {
        this.#modal = new TemplateModalSelector(templates)
        this.#element.classList.add('template-chooser')
        this.#element.textContent = getLangConfig().notSelected
        this.#element.addEventListener('click', async () => {
            const template = await this.showModal()
            this.#onChangeCallback && this.#onChangeCallback(template)
        })
        if (!templates) {
            this.loading.show()
            return
        }
        this.templates = templates
    }

    set templates(templates: PetpetTemplate[]) {
        this.loading.hide()
        this.#modal.templates = templates
    }

    render() {
        const root = document.createElement('div')
        root.append(
            createTitle(getLangConfig().selectTemplate),
            this.#element
        )
        return root
    }

    /** @return {Promise<PetpetTemplate>} */
    async showModal() {
        const template = await this.#modal.show()
        if (template) this.#element.textContent = template.key
        this.template = template
        return template
    }

    /** @param {(PetpetTemplate)=>void} callback */
    set onchange(callback) {
        this.#onChangeCallback = callback
    }
}