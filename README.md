<div align="center">
<img src="https://github.com/user-attachments/assets/63e979be-bae0-4576-90e4-8887bb1d564d" width="300" alt="Petrobras Logo">

#  Sistema de Reservas — Petrobras
### Gestão Inteligente de Auditórios Corporativos
</div>

---

##  Visão Geral

O **Sistema de Reservas Petrobras** é uma plataforma web desenvolvida para organizar, controlar e otimizar a alocação dos auditórios corporativos.  
O sistema garante que reuniões, treinamentos e eventos sigam regras de prioridade, disponibilidade e segurança, reduzindo conflitos e automatizando processos internos.

Este projeto foi desenvolvido como **treino de front-end**, focando em **layout corporativo, responsividade e validação de formulários**.

---

##  Auditórios Disponíveis

<div align="center">

| Auditório | Capacidade | Finalidade | Recursos |
|----------|------------|------------|----------|
| **Principal** | 100 pessoas | Eventos corporativos, apresentações executivas | Videoconferência • Tradução simultânea • Gravação • Multimídia |
| **Treinamento** | 50 pessoas | Workshops e capacitações técnicas | Computadores • Equipamentos de simulação • Climatização |

</div>

---

##  Perfis de Usuário

| Perfil | Permissões | Restrições |
|--------|-------------|------------|
| **Gestores** | Acesso total a todas as reservas | — |
| **Coordenadores** | Criam reservas com algumas aprovações | Auditório Principal pode exigir permissão |
| **Instrutores** | Reservas voltadas apenas para treinamentos | Limitados a eventos técnicos |

---

##  Horários de Funcionamento

<div align="center">

| Dia | Manhã | Tarde | Noite |
|-----|--------|---------|--------|
| **Segunda a Sábado** | 08:00–12:00 | 13:00–17:00 | 18:00–22:00 |
| **Domingo** | 🔒 — | 🔒 — | 🔒 Manutenção / eventos especiais |

</div>

---

##  Fluxo de Reserva

O usuário preenche:

- Nome do evento  
- Responsável  
- Quantidade de participantes  
- Tipo de evento  
- Recursos necessários  
- Lista opcional de participantes  

O sistema então:

1. Valida disponibilidade  
2. Verifica perfil do usuário  
3. Aplica regras de prioridade  
4. Exige aprovação se necessário  
5. Registra a reserva  

---

##  Hierarquia de Prioridades

1️⃣ Eventos de Segurança Operacional  
2️⃣ Treinamentos Obrigatórios  
3️⃣ Reuniões Corporativas  
4️⃣ Workshops e demais eventos  

---

##  Regras de Antecedência

| Ação | Prazo | Observação |
|------|--------|------------|
| Reserva | 48h úteis | Garante organização |
| Cancelamento | 72h | Libera agenda |
| Modificação | 24h | Depende da disponibilidade |

---

##  Políticas de Segurança & Normas Internas

**Controles de Acesso:**  
- Login via sistema corporativo  
- Crachá obrigatório  
- Monitoramento por câmeras  
- Registro de todos os participantes  

**Normas:**  
- Proibido consumo de alimentos  
- Equipamentos apenas por pessoal autorizado  
- Danos geram responsabilidade ao solicitante  
- Respeito ao horário de encerramento  

---

##  Suporte & Emergências

| Situação | Contato | Horário |
|----------|---------|---------|
| Problemas técnicos | TI Corporativo — 3000 | 24h |
| Emergências físicas | Segurança — 191 | 24h |
| Dúvidas sobre reservas | Administração — 3001 | Comercial |

---

##  Seção Técnica do Projeto

### Tecnologias Utilizadas
- **HTML5**  
- **CSS3**  
- **JavaScript** (DOM, eventos, validações)  
- **Responsividade com media queries**  

### Regras de Negócio Implementadas
- Botão de confirmação habilitado apenas após aceitar termos  
- Modal de termos com bloqueio de envio  
- Responsividade automática do sistema  
- Validação de campos obrigatórios  
- Bloqueio visual de horários indisponíveis  
- Fluxo guiado do processo de reserva  

---

##  Preview Visual

<div align="center">
<img width="800" alt="Dashboard" src="https://github.com/user-attachments/assets/6b60a6f0-8a8d-47f2-9ec3-515443fcd2e7" />
<img width="800" alt="Formulário de Reserva" src="https://github.com/user-attachments/assets/a4e8bc7c-5c51-401e-b7b6-5c40a43dc5df" />
</div>

---

## ⚠️ Observação

Este projeto é **um exercício de front-end inicial**. O código contém CSS repetitivo e JS menos modularizado, mas demonstra **capacidade de criar interfaces visuais funcionais e agradáveis**, com atenção ao design corporativo.

