
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Settings, Shield, Info } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Switch } from './ui/switch';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  personalization: false,
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if the user has already set cookie preferences
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        applyTrackingPreferences(savedPreferences);
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
        setShowBanner(true);
      }
    }
  }, []);

  const applyTrackingPreferences = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      console.log('Analytics tracking enabled');
      // Hier könnte Analytics-Code eingefügt werden
    }
    if (prefs.marketing) {
      console.log('Marketing cookies enabled');
      // Hier könnte Marketing-Code eingefügt werden
    }
    if (prefs.functional) {
      console.log('Functional cookies enabled');
      // Hier könnte Functional-Code eingefügt werden
    }
    if (prefs.personalization) {
      console.log('Personalization enabled');
      // Hier könnte Personalization-Code eingefügt werden
    }
  };

  const acceptAll = () => {
    const allEnabled = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    setPreferences(allEnabled);
    savePreferences(allEnabled);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    applyTrackingPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-cookbook-700 shadow-lg shadow-black/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 max-w-2xl w-full mx-auto md:mx-0">
                <Cookie className="h-8 w-8 text-cookbook-700 flex-shrink-0" />
                <p className="text-sm text-cookbook-800">
                  Wir verwenden Cookies und ähnliche Technologien, um Ihre Nutzererfahrung zu verbessern, 
                  relevante Inhalte bereitzustellen und die Websitequalität zu analysieren. 
                  Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten.
                </p>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
                <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="whitespace-nowrap border border-cookbook-700">
                      <Settings className="w-4 h-4 mr-2" />
                      Cookie-Einstellungen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] max-h-[90vh] max-w-[95vw] overflow-y-auto bg-white rounded-xl border-2 border-cookbook-700 shadow-lg shadow-black/30 p-0">
                    <div className="p-6">
                      <DialogHeader>
                        <DialogTitle className="text-cookbook-800 text-xl flex items-center gap-2">
                          <Cookie className="h-5 w-5" />
                          Cookie-Einstellungen
                        </DialogTitle>
                        <DialogDescription className="text-cookbook-600">
                          Hier können Sie Ihre Cookie-Präferenzen individuell anpassen. Ihre Privatsphäre ist uns wichtig.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 py-6">
                        <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-cookbook-50/50">
                          <div className="space-y-1">
                            <div className="font-medium text-cookbook-800 flex items-center gap-2">
                              <Shield className="h-4 w-4" /> Notwendige Cookies
                            </div>
                            <div className="text-sm text-cookbook-600">
                              Diese Cookies sind für die grundlegenden Funktionen der Website erforderlich und können nicht deaktiviert werden. 
                              Sie speichern keine persönlichen Daten.
                            </div>
                          </div>
                          <Switch 
                            checked 
                            disabled 
                            className="data-[state=checked]:bg-cookbook-800 data-[state=unchecked]:bg-cookbook-100" 
                          />
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-cookbook-50/30">
                          <div className="space-y-1">
                            <div className="font-medium text-cookbook-800">Funktionale Cookies</div>
                            <div className="text-sm text-cookbook-600">
                              Ermöglichen erweiterte Funktionen wie Spracheinstellungen und Login-Status. 
                              Verbessern die Benutzerfreundlichkeit der Website.
                            </div>
                          </div>
                          <Switch
                            checked={preferences.functional}
                            onCheckedChange={(checked) =>
                              setPreferences({ ...preferences, functional: checked })
                            }
                            className="data-[state=checked]:bg-cookbook-800 data-[state=unchecked]:bg-cookbook-100"
                          />
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-cookbook-50/30">
                          <div className="space-y-1">
                            <div className="font-medium text-cookbook-800">Analytics Cookies</div>
                            <div className="text-sm text-cookbook-600">
                              Helfen uns zu verstehen, wie Besucher mit der Website interagieren. 
                              Diese Informationen werden anonym gesammelt und ausgewertet.
                            </div>
                          </div>
                          <Switch
                            checked={preferences.analytics}
                            onCheckedChange={(checked) =>
                              setPreferences({ ...preferences, analytics: checked })
                            }
                            className="data-[state=checked]:bg-cookbook-800 data-[state=unchecked]:bg-cookbook-100"
                          />
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-cookbook-50/30">
                          <div className="space-y-1">
                            <div className="font-medium text-cookbook-800">Marketing Cookies</div>
                            <div className="text-sm text-cookbook-600">
                              Werden verwendet, um Werbung relevanter für Sie zu gestalten. 
                              Diese Cookies sammeln Informationen über Ihre Interessen.
                            </div>
                          </div>
                          <Switch
                            checked={preferences.marketing}
                            onCheckedChange={(checked) =>
                              setPreferences({ ...preferences, marketing: checked })
                            }
                            className="data-[state=checked]:bg-cookbook-800 data-[state=unchecked]:bg-cookbook-100"
                          />
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-cookbook-50/30">
                          <div className="space-y-1">
                            <div className="font-medium text-cookbook-800">Personalisierung</div>
                            <div className="text-sm text-cookbook-600">
                              Ermöglichen es uns, die Website an Ihre Vorlieben anzupassen und 
                              Ihnen personalisierte Empfehlungen zu zeigen.
                            </div>
                          </div>
                          <Switch
                            checked={preferences.personalization}
                            onCheckedChange={(checked) =>
                              setPreferences({ ...preferences, personalization: checked })
                            }
                            className="data-[state=checked]:bg-cookbook-800 data-[state=unchecked]:bg-cookbook-100"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-cookbook-100">
                        <Button variant="outline" onClick={() => setShowPreferences(false)} className="text-cookbook-700 border-cookbook-700">
                          Abbrechen
                        </Button>
                        <Button 
                          onClick={acceptAll}
                          className="bg-cookbook-800 text-white hover:bg-cookbook-900 border border-cookbook-700"
                        >
                          Alle akzeptieren
                        </Button>
                        <Button 
                          onClick={() => savePreferences(preferences)}
                          className="bg-cookbook-700 text-white hover:bg-cookbook-800 border border-cookbook-700"
                        >
                          Einstellungen speichern
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button 
                  onClick={acceptAll} 
                  className="bg-cookbook-800 text-white hover:bg-cookbook-900 whitespace-nowrap border border-cookbook-700"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
