import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function App() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  const responderPergunta = () => {
    const respostasGeografia = {
      clima:
        "Clima é o conjunto de condições atmosféricas médias de uma região durante um longo período. Pode ser tropical, equatorial, temperado, etc.",
      relevo:
        "Relevo é o conjunto de formas da superfície terrestre, como montanhas, planaltos, planícies e depressões.",
      rios:
        "Rios são cursos de água doce que correm naturalmente em direção a oceanos, lagos ou outros rios. Exemplos: Rio Amazonas, Rio São Francisco.",
      biomas:
        "Biomas são grandes conjuntos de ecossistemas com características semelhantes. Exemplos: Floresta Amazônica, Cerrado, Caatinga.",
      população:
        "População é o conjunto de pessoas que vivem em um lugar. Estudamos aspectos como crescimento, densidade e migração.",
      fronteiras:
        "Fronteiras são os limites entre países ou estados. Podem ser naturais (como rios) ou políticas (definidas por leis).",
      cartografia:
        "Cartografia é a ciência que estuda e produz mapas. Usa escalas, coordenadas e símbolos para representar o espaço geográfico."
    };

    const chave = Object.keys(respostasGeografia).find((palavra) =>
      pergunta.toLowerCase().includes(palavra)
    );

    if (chave) {
      setResposta(respostasGeografia[chave]);
    } else {
      setResposta(
        "Desculpe, ainda estou aprendendo sobre esse assunto. Tente perguntar sobre clima, relevo, rios, biomas, população, fronteiras ou cartografia."
      );
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4 space-y-4">
      <h1 className="text-3xl font-bold text-blue-800">Professor de Geografia 🤓🌍</h1>

      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="space-y-4">
          <Input
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Pergunte algo sobre geografia..."
          />
          <Button onClick={responderPergunta}>Perguntar</Button>
          {resposta && (
            <div className="p-4 bg-white border rounded-md text-gray-800">
              {resposta}
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
