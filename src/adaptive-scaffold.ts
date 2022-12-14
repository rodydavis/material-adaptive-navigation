import { html, css, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";

export const tagName = "adaptive-scaffold";

@customElement(tagName)
export class AdaptiveScaffold extends LitElement {
  static styles = css`
    :host {
      font-family: Roboto, sans-serif;
    }
    main,
    section,
    .content {
      width: 100%;
      height: 100%;
    }
    .row {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .content {
      box-sizing: border-box;
      padding: 20px;
      position: relative;
    }
    .fixed {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
    .navigation-drawer {
      position: relative;
    }
    .navigation-rail {
      height: 100%;
      box-sizing: border-box;
    }
  `;

  @state() breakpoint: Breakpoint = 0;
  @property({ type: Boolean }) tabs = false;

  render() {
    return html` ${this.getStyles()} ${this.renderNavigation()}`;
  }

  private renderNavigation() {
    const navType = this.getNavigation();
    const navItems = this.getNavItems();
    switch (navType) {
      case NavigationType.Tabs:
        return html`
          <main class="column">
            ${this.getAppBar()}
            <nav class="tabs">
              ${navItems.map(
          (item) => html`
                  <div class="tab" route=${item.href} @click=${this.onLink}>
                    <input
                      type="radio"
                      name="nav"
                      value=${item.href}
                      id=${item.href}
                      ?checked=${item.selected}
                    />
                    <label for=${item.href}>${item.label}</label>
                  </div>
                `
        )}
            </nav>
            <div class="content">
              <div class="fixed"><slot name="fab"></slot></div>
              <slot></slot>
            </div>
          </main>
        `;
      case NavigationType.DrawerPinned:
        return html`
          <main class="row">
            <div class="navigation-drawer">
              <section>
                ${navItems.map(
          (item) => html`
                    <div class="list-tile" route=${item.href} @click=${this.onLink}>
                      <i class="leading material-icons">${item.icon}</i>
                      <span class="title">${item.label}</span>
                    </div>
                  `
        )}
              </section>
            </div>
            <section class="column">
              ${this.getAppBar()}
              <div class="content">
                <div class="fixed"><slot name="fab"></slot></div>
                <slot></slot>
              </div>
            </section>
          </main>
        `;
      case NavigationType.NavigationRail:
        return html`
          <main class="row">
            <aside class="navigation-rail">
              <slot name="fab"></slot>
              <nav>
                ${navItems.map((e) => this.buildNavIcon({ ...e, group: "side-nav" }))}
              </nav>
            </aside>
            <section class="column">
              ${this.getAppBar()}
              <div class="content"><slot></slot></div>
            </section>
          </main>
        `;
      case NavigationType.BottomNavigation:
        return html`
          <main class="column">
            ${this.getAppBar()}
            <div class="content">
              <div class="fixed"><slot name="fab"></slot></div>
              <slot></slot>
            </div>
            <nav class="navigation-bar">
              ${navItems.map((e) => this.buildNavIcon({ ...e, group: "bottom-nav-icons" }))}
            </nav>
          </main>
        `;
      default:
        return html`Drawer Hidden`;
    }
  }

  private buildNavIcon({ icon, label, href, group, selected }: { icon: string, label: string, href: string, group: string, selected: boolean }) {
    return html`<input type="radio" name=${group} value=${href} id=${href} ?checked=${selected} />
      <label class="navigation-icon" for=${href} route=${href} @click=${this.onLink}>
        <i class="material-icons">${icon}</i>
        <span>${label}</span>
      </label>`;
  }

  private onLink(e: Event) {
    const target = e.target as HTMLElement;
    const route = target.getAttribute("route");
    if (route) {
      window.location.href = route;
    }
  }

  private getAppBar() {
    return html`
      <header class="top-app-bar small">
        <div class="title"><slot name="title"></slot></div>
        <slot name="actions"> </slot>
      </header>
    `;
  }

  private getStyles() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-design-lite/css/mdl.min.css"
      />
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-design-lite/css/icons.module.css"
      />
    `;
  }

  override firstUpdated() {
    const breakpoints = [720, 1440];
    // Listen for breakpoints with media query
    breakpoints.forEach((breakpoint) => {
      const query = window.matchMedia(`(min-width: ${breakpoint}px)`);
      query.addEventListener("change", this.onResize.bind(this));
    });
    this.onResize();
  }

  private onResize() {
    //  Get the current breakpoint
    const breakpoint = this.getBreakpoint();
    //  If the breakpoint has changed, update the state
    if (breakpoint !== this.breakpoint) {
      this.breakpoint = breakpoint;
    }
  }

  private getBreakpoint() {
    //  Get the width of the window
    const width = window.innerWidth;
    //  Return the breakpoint based on the window width
    if (width < 720) {
      return Breakpoint.Small;
    } else if (width < 1440) {
      return Breakpoint.Medium;
    } else {
      return Breakpoint.Large;
    }
  }

  private getNavigation() {
    const navLength = this.getNavItems().length;

    // Check if the navigation is tabs
    if (this.tabs) return NavigationType.Tabs;

    // Check if there are more than 2 navigation items
    if (navLength >= 2 && navLength <= 5) {
      switch (this.breakpoint) {
        case Breakpoint.Small:
          return NavigationType.BottomNavigation;
        case Breakpoint.Medium:
          return NavigationType.NavigationRail;
        case Breakpoint.Large:
          return NavigationType.DrawerPinned;
      }
    }
    // Otherwise, return the default navigation type
    return NavigationType.DrawerHidden;
  }

  private getNavItems() {
    const results: NavigationItem[] = [];
    const nav = this.querySelector("nav")!;
    for (const item of Array.from(nav.children)) {
      const label = item.querySelector("label");
      const icon = item.querySelector("i");
      const href = item.getAttribute("href") ?? "";
      const selected = item.getAttribute("selected") !== null;
      results.push({
        href,
        selected,
        label: label?.textContent ?? "",
        icon: icon?.textContent ?? "",
      });
    }
    return results;
  }
}

enum Breakpoint {
  Small,
  Medium,
  Large,
}

enum NavigationType {
  DrawerPinned,
  DrawerHidden,
  BottomNavigation,
  NavigationRail,
  Tabs,
}

interface NavigationItem {
  href: string;
  label: string;
  icon: string;
  selected: boolean;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AdaptiveScaffold;
  }
}
