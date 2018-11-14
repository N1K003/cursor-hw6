window.onload = () => new Button(100, 100, 'hit me').append(document.querySelector('div'));

// Сделать класс Button
class Button {
    // Есть возможность указать размеры, текст внутри кнопки
    constructor(height, width, caption) {
        if (!Number.isInteger(height))
            throw 'Height should be integer';
        if (!Number.isInteger(width))
            throw 'Width should be integer';

        this.height = height;
        this.width = width;
        this.caption = caption;
    }

    get element() {
        const el = document.createElement('button');
        el.style.height = `${this.height}px`;
        el.style.width = `${this.width}px`;
        el.style.position = 'relative';
        el.innerText = this.caption;
        // При наведении на кнопку рисуется рамка или другой эффект, который вам нравится
        el.onmouseenter = target => {
            const element = target.srcElement;
            element.style.left = `${Math.floor(Math.random() * (element.parentElement.clientWidth - this.width))}px`;
            element.style.top = `${Math.floor(Math.random() * (element.parentElement.clientHeight - this.height))}px`;
        };
        el.onclick = () => {
            alert("I don't believe this! Make a screenshot asap!");
        };

        return el;
    }

    append(parent) {
        if (!parent || typeof parent !== 'object') {
            document.body.appendChild(this.element);
        } else {
            parent.append(this.element);
        }
    }
}
