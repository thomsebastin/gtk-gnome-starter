#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const WelcomeToTheGrid = new Lang.Class({
    Name: 'Welcome to the Grid',

    // Create the application itself
    _init: function() {
        this.application = new Gtk.Application();

        // Connect 'activate' and 'startup' signals to the callback functions
        this.application.connect('activate', Lang.bind(this, this._onActivate));
        this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    // Callback function for 'activate' signal presents windows when active
    _onActivate: function() {
        this._window.present();
    },

    // Callback function for 'startup' signal builds the UI
    _onStartup: function() {
        this._buildUI ();
    },

    // Build the application's UI
    _buildUI: function() {

        // Create the application window
        this._window = new Gtk.ApplicationWindow({
            application: this.application,
            window_position: Gtk.WindowPosition.CENTER,
            border_width: 10,
            title: "Welcome to the Grid"});

        // Create an image
        this._image = new Gtk.Image ({ file: "gnome-image.png" });

        // Create a second image using a stock icon
        this._icon = new Gtk.Image ({ stock: 'gtk-about' });
        
        // Create a label
        this._label = new Gtk.Label ({ label: "Welcome to GNOME, too!"});

        // Create the Grid
        this._grid = new Gtk.Grid ({row_spacing: 20, column_spacing: 20});

        // Attach the image and label to the grid
        this._grid.attach (this._image, 0, 0, 2, 1);
        this._grid.attach (this._icon, 0, 1, 1, 1);
        this._grid.attach (this._label, 1, 1, 1, 1);

        // Add the grid to the window
        this._window.add (this._grid);

        // Show the window and all child widgets
        this._window.show_all();
    }

});

// Run the application
let app = new WelcomeToTheGrid ();
app.application.run (ARGV);